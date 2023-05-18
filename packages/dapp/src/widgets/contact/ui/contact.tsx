
import { Body, Description, ItemsInfo, Title } from "./contact.styled"

import { contractAnchor } from "shared/config/router"
import { itemsInfo } from "../config"
import { aosFadeUp } from "shared/config/aos"


export const Contacts = () => {
    return(
        <Body id={contractAnchor} data-aos={aosFadeUp}>
            {itemsInfo.map((item) => (
                <ItemsInfo key={item.title}>
                    <Title>{item.title}</Title>
                    <Description>{item.info}</Description>
                </ItemsInfo>
            ))}
        </Body>
    )
}