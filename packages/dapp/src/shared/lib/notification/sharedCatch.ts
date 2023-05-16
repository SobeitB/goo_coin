import {notificationStore} from "./index.ts";
import {ACCOUNT, NotificationType, TIME} from "shared/config/notification";

export const sharedCatch = (address:string, deadline:number) => {
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

    return false;
}