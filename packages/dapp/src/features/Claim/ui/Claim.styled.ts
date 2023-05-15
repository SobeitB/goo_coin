

import styled from 'styled-components'
import { NotificationCircleBody, CcssBosyCircle } from 'shared/ui/NotificationCircle'




export const BodyClaimBtn = styled.div`
    position: relative;
    margin-top: 85px;
    width: 350px;
    height: 81px;
`

export const ClaimBtn = styled.button`
    width: 100%;
    height: 100%;
    background: var(--bg-color-blue);
    border: 5px solid var(--font-color-white);
    border-radius: 20px;
    font-size: var(--font-size-h4);
`

export const BodyCircle = styled.div`
    ${CcssBosyCircle};
    width: 62px;
    height: 62px;

    & ${NotificationCircleBody} {
        font-size: var(--font-size-x-small);
    }
`

export const BodyTime = styled.div`
    margin-top:71px;
`




