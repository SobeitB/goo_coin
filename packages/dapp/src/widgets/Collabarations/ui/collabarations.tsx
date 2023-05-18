
import { BodyCollabarations, BodyTokens, TokenItem } from "./collabarations.styled"
import { Title } from "shared/ui/Title"

import { tokens } from "../config"
import { aosFadeUp } from "shared/config/aos"

export const Collabarations = () => {
    return(
        <BodyCollabarations>

            <Title data-aos={aosFadeUp}>Our wonderful friends</Title>

            <BodyTokens data-aos={aosFadeUp}>
                {tokens.map((token) => (
                    <TokenItem key={token.name}>
                        <img src={token.img} />
                        <span>{token.name}</span>
                    </TokenItem>
                ))}
            </BodyTokens>
        </BodyCollabarations>
    )
} 