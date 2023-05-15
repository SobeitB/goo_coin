import { onChangeStateMenu } from "widgets/welcome/lib"
import { MenuBtn, BtnItems } from "./styled"



export const BtnMenuMobile = () => {
    return(
        <MenuBtn onClick={onChangeStateMenu}>
            {[0,1,2].map((key) => (
                <BtnItems key={key} />
            ))}
        </MenuBtn>
    )
}