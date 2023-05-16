
import { useAccount, useContract, useSigner } from "wagmi";
import { useStore } from "effector-react";

import { ERC20_GOO } from "shared/config/blockchain";
import { REFERRER_ITEM } from "shared/config/referral";
import { $deadline, $isClaim, $pools, AIR_DROP } from "entities/sale";
import { catchErrorNotification, notificationStore } from "shared/lib/notification";
import { CLAIM_TRUE,SUCCESS, ACCOUNT, NotificationType, TIME } from "shared/config/notification";

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
        if(!address) {
            return notificationStore.createNotification({
                text:ACCOUNT,
                type:NotificationType.ERROR
            })
        }

        if(deadline <= 0) {
            return notificationStore.createNotification({
                text:TIME,
                type:NotificationType.ERROR
            })
        }

        if(isClaim) {
            return notificationStore.createNotification({
                text:CLAIM_TRUE,
                type:NotificationType.ERROR
            })
        }

        try{
            const claim = await contract?.claim(REFERRER_ITEM)
            console.log(claim);

            if(claim) {
                notificationStore.createNotification({
                    text:SUCCESS,
                    type:NotificationType.POSITIVE
                })
            }

        } catch(e:any) {
            console.log(e)
            catchErrorNotification(e, NotificationType.ERROR)
        }
    }

    return {
        percent:pools.claim,
        claim,
        address
    };
}