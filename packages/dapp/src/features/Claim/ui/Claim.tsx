import { memo } from "react"
import { BodyCircle, BodyClaimBtn, BodyTime, ClaimBtn } from "./Claim.styled"
import { NotificationCircle } from "shared/ui/NotificationCircle"
import {DescriptionGet, DescriptionTime, Timer} from "shared/ui/getComponents"
import { WalletConnect } from "entities/user"


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
            </BodyTime>

            <WalletConnect />
        </>
    )
})