
import { BodyDescription, BodyEconomics, BodyImg, EconomicsImg, TokenSupply, TokenSupplyTitle } from "./economics.styled"
import { Title } from "shared/ui/Title"
import roadmap from "./img/roadmap.png"
import { tokenonomicsAnchor } from "shared/config/router"



export const Economics = () => {
    return(
        <BodyEconomics id={tokenonomicsAnchor}>

            <Title>Goose Economics</Title>

            <BodyDescription>
                <TokenSupplyTitle>Token supply</TokenSupplyTitle>
                <TokenSupply>715.151.950.000</TokenSupply>
            </BodyDescription>

            <BodyImg >
                <EconomicsImg src={roadmap} />
            </BodyImg>

            
        </BodyEconomics>
    )
}