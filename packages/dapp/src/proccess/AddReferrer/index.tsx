import {useEffect} from "react";
import {useStore} from "effector-react";
import { useAccount } from "wagmi";
import bs58 from "bs58";


import {router} from "shared/config/router";
import {REFERRER_ITEM, REFERRER_KEY} from "shared/config/referral";
import {notificationStore} from "shared/lib/notification";
import {YOUR_ADDRESS, NotificationType} from "shared/config/notification";

export const addReferrer = (component: () => React.ReactNode) => () => {
    const query = useStore(router.$query);
    const {address} = useAccount();

    useEffect(() => {
        const getData = () => {
            const {referrer} = query;

            if(!referrer) return;
            const addressReffer = `0x${Buffer.from(bs58.decode(referrer)).toString("hex")}`;

            if(addressReffer.toLocaleLowerCase() === address?.toLocaleLowerCase()) {
                return notificationStore.createNotification({
                    text:YOUR_ADDRESS,
                    type:NotificationType.ERROR
                });
            }

            if(
                addressReffer
                &&
                !REFERRER_ITEM
            ) {
                localStorage.setItem(REFERRER_KEY, addressReffer);
            }
        }
        getData()
    }, [query, address])

    return component()
}