
import {NotificationType} from "shared/config/notification"
import {ALL_ERRORS, ObjNotification} from "shared/config/notification";
import {notificationStore} from "shared/lib/notification";


export const catchErrorNotification = (
    textError:string,
    typeNotification:NotificationType
) => {
    
    return ALL_ERRORS.forEach((ERROR:ObjNotification) => {
        const isThisError:boolean = String(textError).includes(ERROR.error);
        if(!isThisError) return;
        
        notificationStore.createNotification({
            text: ERROR.text,
            type: typeNotification
        });
    })
}