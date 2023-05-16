import { memo } from "react"


import { BodyCircle, BodyClaimBtn, BodyTime, ClaimBtn, MarginTopProgress } from "./Claim.styled"
import { NotificationCircle } from "shared/ui/NotificationCircle"
import {DescriptionGet, DescriptionTime, Progress, Timer} from "shared/ui/getComponents"
import { WalletConnect } from "entities/user"
import {WrapperBtn} from "shared/ui/getComponents/styledShared.ts";
import { useClaim } from "../model"


export const Claim = memo(() => {
    const {claim, percent, address} = useClaim()

    return(
        <>
            <DescriptionGet>Claim 100.000 $GOO</DescriptionGet>

            <BodyClaimBtn>
                <ClaimBtn onClick={claim}>CLAIM</ClaimBtn>

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