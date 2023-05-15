import {ReactNode} from "react";

export enum NotificationType {
    POSITIVE = 'positive',
    ERROR = 'error',
    INFO = 'info',

}

export interface NotificationI {
    text:string | ReactNode[];
    type:NotificationType;
}


export interface ObjNotification {
    error:string,
    text:string,
}