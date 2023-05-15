
import {ReactNode} from "react";

import {BtnUI} from "./styled.ts";
import {ButtonType} from "./config.ts";



interface ButtonProps {
    children:ReactNode,
    type?:ButtonType,
    onClick?:(value:any) => void,
}

export const Button = ({children, type, onClick}:ButtonProps) => (
    <BtnUI
        typeBtn={type ?? ButtonType.DEFAULT}
        onClick={onClick}
    >{children}</BtnUI>
)

export {BtnUI, ButtonType}