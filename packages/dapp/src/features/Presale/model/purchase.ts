import {useAccount, useBalance, useContract, useFeeData, useSigner} from "wagmi";
import {useStore} from "effector-react";
import {useCallback, useRef,} from "react";
import {formatEther, isAddress, parseEther} from "viem";


import {$deadline, $pools, MAX_PRICE, MIN_PRICE, PRICE_TOKEN} from "entities/sale";
import {catchErrorNotification, notificationStore, sharedCatch} from "shared/lib/notification";
import {BALANCE, MAX_ETH, MIN_ETH, NotificationType, SUCCESS} from "shared/config/notification";
import {ERC20_GOO, NULL_ADDRESS} from "shared/config/blockchain";
import {REFERRER_ITEM} from "shared/config/referral";
import { setTxEnd } from "shared/lib/txEnd";


export const usePurchase = () => {
    const {data:signer} = useSigner();
    const {address} = useAccount();
    const {data:balance} = useBalance({address});
    const { data:fee } = useFeeData()
    const pools = useStore($pools);
    const deadline = useStore($deadline);
    const inputSend = useRef<HTMLInputElement>(null);

    const contract = useContract({
        ...ERC20_GOO,
        signerOrProvider:signer,
    });

    const purchase = useCallback(async () => {
        await setTxEnd(async () => {
            const isFalse = sharedCatch(address ?? '', deadline);
            if(isFalse) return ;

            const value = +(inputSend?.current?.value ?? '1');

            if(value < MIN_PRICE) {
                return notificationStore.createNotification({
                    text:MIN_ETH,
                    type:NotificationType.ERROR
                })
            }

            const bought = +formatEther(await contract?.bought(address));

            if(+bought + value > MAX_PRICE) {
                return notificationStore.createNotification({
                    text:MAX_ETH,
                    type:NotificationType.ERROR
                })
            }

            if(+(balance?.formatted ?? 0)  < value) {
                return notificationStore.createNotification({
                    text:BALANCE,
                    type:NotificationType.ERROR
                })
            }
            

            try {
                const referr = isAddress(REFERRER_ITEM ?? '') ? REFERRER_ITEM : NULL_ADDRESS
                const purchase = await contract?.tokenSale(referr, );

                if(purchase) {
                    notificationStore.createNotification({
                        text:SUCCESS,
                        type:NotificationType.POSITIVE
                    })
                }
            } catch (e:any) {
                console.log(e)
                catchErrorNotification(e)
            }
        })
        
    }, [contract, address, deadline, inputSend, balance, fee])

    return {
        address,
        purchase,
        percent:pools.presale,
        inputSend,
    }
}