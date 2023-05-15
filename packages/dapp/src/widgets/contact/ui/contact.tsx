
import { Body, Description, ItemsInfo, Title } from "./contact.styled"

import { contractAnchor } from "shared/config/router"
import { itemsInfo } from "../config"


export const Contacts = () => {
    return(
        <Body id={contractAnchor}>
            {itemsInfo.map((item) => (
                <ItemsInfo key={item.title}>
                    <Title>{item.title}</Title>
                    <Description>{item.info}</Description>
                </ItemsInfo>
            ))}
        </Body>
    )
}