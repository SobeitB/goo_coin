import { memo } from "react"

import {DescriptionGet, Items, ListItems, MarginTopProgress} from "./Presale.styled"
import {Swap} from "./swap";
import {listRules} from "../config";
import {DescriptionTime, Progress, Timer} from "shared/ui/getComponents";
import {WrapperBtn} from "shared/ui/getComponents/styledShared.ts";
import {WalletConnect} from "entities/user";
import {usePurchase} from "../model";
import {Button} from "shared/ui/Button";


export const Presale = memo(() => {
    const {
        purchase,
        address,
        percent,
        inputSend,
    } = usePurchase();

    return(
        <>
            <DescriptionGet>Presale</DescriptionGet>

            <Swap
                inputSend={inputSend}
            />

            <ListItems>
                {listRules.map((text) => (
                    <Items key={text}>
                        {text}
                    </Items>
                ))}
            </ListItems>

            <DescriptionTime>Time left before airdrop/presale ends.</DescriptionTime>
            <Timer />

            <MarginTopProgress />
            <Progress percentClaimed={percent} />

            <WrapperBtn>
                {address ?
                    <Button onClick={purchase} >Purchase</Button>
                    :
                    <WalletConnect />
                }
            </WrapperBtn>
        </>
    )
})