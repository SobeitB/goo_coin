import { memo } from "react"
import { BodyCircle, BodyClaimBtn, BodyTime, ClaimBtn, MarginTopProgress } from "./Claim.styled"
import { NotificationCircle } from "shared/ui/NotificationCircle"
import {DescriptionGet, DescriptionTime, Progress, Timer} from "shared/ui/getComponents"
import { WalletConnect } from "entities/user"
import {WrapperBtn} from "shared/ui/getComponents/styledShared.ts";


export const Claim = memo(() => {
    return(
        <>
            <DescriptionGet>Claim 100.000 $GOO</DescriptionGet>

            <BodyClaimBtn>
                <ClaimBtn>CLAIM</ClaimBtn>

                <BodyCircle>
                    <NotificationCircle >
                        Free
                    </NotificationCircle>
                </BodyCircle>
            </BodyClaimBtn>

            <BodyTime>
                <DescriptionTime>Time left before airdrop/presale ends.</DescriptionTime>
                <Timer timeLeft={100000} />
                <MarginTopProgress />
                <Progress percentClaimed={50} />
            </BodyTime>

            <WrapperBtn>
                <WalletConnect />
            </WrapperBtn>
        </>
    )
})