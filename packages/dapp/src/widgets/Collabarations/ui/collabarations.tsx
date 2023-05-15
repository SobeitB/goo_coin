
import { BodyCollabarations, BodyTokens, TokenItem } from "./collabarations.styled"
import { Title } from "shared/ui/Title"

import { tokens } from "../config"

export const Collabarations = () => {
    return(
        <BodyCollabarations>

            <Title>Our wonderful friends</Title>

            <BodyTokens>
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