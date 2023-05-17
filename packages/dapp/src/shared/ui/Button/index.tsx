
import {ReactNode} from "react";
import { useStore } from "effector-react";

import {BtnUI} from "./styled.ts";
import {ButtonType} from "./config.ts";
import { $isTx } from "entities/user";



interface ButtonProps {
    children:ReactNode,
    type?:ButtonType,
    onClick?:(value:any) => void,
}

export const Button = ({children, type, onClick}:ButtonProps) => {
    const isTx = useStore($isTx)
    return (
        <BtnUI
            typeBtn={type ?? ButtonType.DEFAULT}
            onClick={onClick}
            disabled={isTx}
        >
            {isTx ?
                "Loading.."
                :
                children
            }
        </BtnUI>
    )
    
}
export {BtnUI, ButtonType}