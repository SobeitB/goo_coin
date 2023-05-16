import {useAccount, useContract, useSigner} from "wagmi";
import {useStore} from "effector-react";
import {useCallback, useRef,} from "react";


import {$deadline, $pools, MAX_PRICE, MIN_PRICE, PRICE_TOKEN} from "entities/sale";
import {catchErrorNotification, notificationStore, sharedCatch} from "shared/lib/notification";
import {MAX_ETH, MIN_ETH, NotificationType, SUCCESS} from "shared/config/notification";
import {ERC20_GOO} from "shared/config/blockchain";
import {formatEther, parseEther} from "viem";
import {REFERRER_ITEM} from "shared/config/referral";


export const usePurchase = () => {
    const {data:signer} = useSigner();
    const {address} = useAccount();
    const pools = useStore($pools);
    const deadline = useStore($deadline);
    const inputSend = useRef<HTMLInputElement>(null);

    const contract = useContract({
        ...ERC20_GOO,
        signerOrProvider:signer,
    });

    const purchase = useCallback(async () => {
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

        try {
            const purchase = await contract?.tokenSale(REFERRER_ITEM, {
                value:parseEther(`${value / PRICE_TOKEN}`)
            });

            if(purchase) {
                notificationStore.createNotification({
                    text:SUCCESS,
                    type:NotificationType.POSITIVE
                })
            }
        } catch (e:any) {
            console.log(e)
            catchErrorNotification(e, NotificationType.ERROR)
        }
    }, [contract, address, deadline, inputSend])

    return {
        address,
        purchase,
        percent:pools.presale,
        inputSend,
    }
}