
import { useAccount, useContract, useSigner } from "wagmi";
import { useStore } from "effector-react";
import { isAddress } from "viem";

import { ERC20_GOO, NULL_ADDRESS } from "shared/config/blockchain";
import { REFERRER_ITEM } from "shared/config/referral";
import { $deadline, $isClaim, $pools } from "entities/sale";
import {catchErrorNotification, notificationStore, sharedCatch} from "shared/lib/notification";
import { CLAIM_TRUE,SUCCESS, NotificationType } from "shared/config/notification";
import { setTxEnd } from "shared/lib/txEnd";

export const useClaim = () => {
    const {data:signer} = useSigner();
    const {address} = useAccount();
    const isClaim = useStore($isClaim);
    const pools = useStore($pools);
    const deadline = useStore($deadline);
    
    const contract = useContract({
        ...ERC20_GOO,
        signerOrProvider:signer
    });

    const claim = async () => {
        setTxEnd(async () => {
            const isFalse = sharedCatch(address ?? '', deadline);
            if(isFalse) return ;
    
            if(isClaim) {
                return notificationStore.createNotification({
                    text:CLAIM_TRUE,
                    type:NotificationType.ERROR
                })
            }
    
            try{
                const referr = isAddress(REFERRER_ITEM ?? '') ? REFERRER_ITEM : NULL_ADDRESS
                const claim = await contract?.claim(referr)
                if(claim) {
                    notificationStore.createNotification({
                        text:SUCCESS,
                        type:NotificationType.POSITIVE
                    })
                }
    
            } catch(e:any) {
                console.log(e)
                catchErrorNotification(e)
            }
        })
    }

    return {
        percent:pools.claim,
        claim,
        address
    };
}