
import {RefObject} from "react";
import bs58 from "bs58";
import {isAddress} from "viem";

import {referrerQuery} from "shared/config/router";
import {setUrl} from "./linkReferral.ts";
import {notificationStore} from "shared/lib/notification";
import {NOT_ADDRESS, NotificationType} from "shared/config/notification";

export const createReferralLink = (inputAddress:  RefObject<HTMLInputElement>) => () => {

    const address = inputAddress?.current?.value ?? '0x';
    if(!isAddress(address)) {
        return notificationStore.createNotification({
            text:NOT_ADDRESS,
            type:NotificationType.ERROR
        })
    }

    const referralHex = bs58.encode(Buffer.from(address.slice(2), 'hex'));
    const href = window.location.href;
    const page = window.location.pathname;

    setUrl(`${href.replace(page, '')}?${referrerQuery}=${referralHex}`);
}