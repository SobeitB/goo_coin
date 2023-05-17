import { memo } from "react"


import { BodyCircle, BodyClaimBtn, BodyTime, MarginTopProgress } from "./Claim.styled"
import { NotificationCircle } from "shared/ui/NotificationCircle"
import {DescriptionGet, DescriptionTime, Progress} from "shared/ui/getComponents"
import { WalletConnect } from "entities/user"
import { Timer } from "entities/sale"
import {WrapperBtn} from "shared/ui/getComponents/styledShared.ts";
import { useClaim } from "../model"
import {Button} from "shared/ui/Button";


export const Claim = memo(() => {
    const {claim, percent, address} = useClaim()

    return(
        <>
            <DescriptionGet>Claim 100.000 $GOO</DescriptionGet>

            <BodyClaimBtn>
                <Button onClick={claim}>CLAIM</Button>

                <BodyCircle>
                    <NotificationCircle >
                        Free
                    </NotificationCircle>
                </BodyCircle>
            </BodyClaimBtn>

            <BodyTime>
                <DescriptionTime>Time left before airdrop/presale ends.</DescriptionTime>
                <Timer />
                <MarginTopProgress />
                <Progress percentClaimed={percent} />
            </BodyTime>

            {!address && 
                <WrapperBtn>
                    <WalletConnect />
                </WrapperBtn>
            }
            
        </>
    )
})