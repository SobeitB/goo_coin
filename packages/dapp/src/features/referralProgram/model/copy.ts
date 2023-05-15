
import {RefObject} from "react";

import {copyText} from "shared/lib/copyText";
import {notificationStore} from "shared/lib/notification";
import {NOT_COPY, NotificationType} from "shared/config/notification";

export const copyLink = (link:string | null, input:RefObject<HTMLInputElement>) => () => {

    if(!link) {
        return notificationStore.createNotification({
            text:NOT_COPY,
            type:NotificationType.ERROR
        });
    }

    copyText(link)()

    if(input?.current) {
        input.current.value = '';
    }
}