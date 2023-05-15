import { ReactNode } from "react"
import { NotificationCircleBody, CcssBosyCircle } from "./styled"

export interface NotificationCircleProps {
    children: ReactNode;
}


export const NotificationCircle = ({children}:NotificationCircleProps) => {
    return(
        <NotificationCircleBody>
            {children}
        </NotificationCircleBody>
    )
}

export {NotificationCircleBody, CcssBosyCircle}