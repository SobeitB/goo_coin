import {notificationStore} from "shared/lib/notification";
import {COPY_TEXT, NotificationType} from "shared/config/notification";

export const copyText = (text: string) => () => {

    navigator.clipboard.writeText(text);

    notificationStore.createNotification({
        text:COPY_TEXT,
        type:NotificationType.POSITIVE
    })
}