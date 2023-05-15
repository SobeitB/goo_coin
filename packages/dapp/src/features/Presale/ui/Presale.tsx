import { memo } from "react"

import {DescriptionGet, Items, ListItems, MarginTopProgress} from "./Presale.styled"
import {Swap} from "./swap";
import {listRules} from "../config";
import {DescriptionTime, Progress, Timer} from "shared/ui/getComponents";
import {WrapperBtn} from "../../../shared/ui/getComponents/styledShared.ts";
import {WalletConnect} from "../../../entities/user";


export const Presale = memo(() => {
    return(
        <>
            <DescriptionGet>Presale</DescriptionGet>

            <Swap />

            <ListItems>
                {listRules.map((text) => (
                    <Items key={text}>
                        {text}
                    </Items>
                ))}
            </ListItems>

            <DescriptionTime>Time left before airdrop/presale ends.</DescriptionTime>
            <Timer timeLeft={1000} />

            <MarginTopProgress />
            <Progress percentClaimed={30} />

            <WrapperBtn>
                <WalletConnect />
            </WrapperBtn>
        </>
    )
})