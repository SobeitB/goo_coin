
import { BodyDescription, BodyEconomics, BodyImg, EconomicsImg, TokenSupply, TokenSupplyTitle } from "./economics.styled"
import { Title } from "shared/ui/Title"
import roadmap from "./img/roadmap.png"
import { tokenonomicsAnchor } from "shared/config/router"
import { aosFadeUp } from "shared/config/aos"



export const Economics = () => {
    return(
        <BodyEconomics id={tokenonomicsAnchor}>

            <Title data-aos={aosFadeUp}>Goose Economics</Title>

            <BodyDescription data-aos={aosFadeUp}>
                <TokenSupplyTitle>Token supply</TokenSupplyTitle>
                <TokenSupply>715.151.950.000</TokenSupply>
            </BodyDescription>

            <BodyImg data-aos={aosFadeUp}>
                <EconomicsImg src={roadmap} />
            </BodyImg>

            
        </BodyEconomics>
    )
}