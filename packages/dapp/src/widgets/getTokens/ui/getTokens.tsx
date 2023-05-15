import { Title } from "shared/ui/Title"
import { Body, BodyChoose, TitleGet, WrapperGetTokens } from "./getTokens.styled"
import { Claim } from "features/Claim";
import { Presale } from "features/Presale";
import { useToogle } from "shared/lib/toogle";
import { claimAnchor } from "shared/config/router";


export const GetTokens = () => {
    const [isPresale, setIsPresale] = useToogle();

    return(
        <Body id={claimAnchor}>
            <Title>You get zkGoose now</Title>

{/* onClick={setIsPresale} */}
            <WrapperGetTokens>
                <TitleGet >You get zkGoose now</TitleGet>


                <BodyChoose isopen={!isPresale} >
                    <Claim />
                </BodyChoose>

                <BodyChoose isopen={isPresale}>
                    <Presale />
                </BodyChoose>

                
            </WrapperGetTokens>
        </Body>
    )
}