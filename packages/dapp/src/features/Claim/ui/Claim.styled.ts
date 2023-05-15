

import styled from 'styled-components'
import { NotificationCircleBody, CcssBosyCircle } from 'shared/ui/NotificationCircle'
import { sizeMixin } from 'shared/lib/mixinsCSS'



export const BodyClaimBtn = styled.div`
    position: relative;
    ${sizeMixin(60, 85, 1440, "margin-top")}
    ${sizeMixin(233, 350, 1440, "width")}
    ${sizeMixin(54, 81, 1440, "height")}

    @media(max-width:500px) {
        width: 250px;
        height: 65px;
        margin-top:60px;
    }

    @media(max-width: 420px) {
        width: 233px;
        height: 54px;
    }
`

export const ClaimBtn = styled.button`
    width: 100%;
    height: 100%;
    background: var(--bg-color-blue);
    border: 5px solid var(--font-color-white);
    border-radius: 20px;
    font-size: var(--font-size-h4);

    @media(max-width: 420px) {
        border-radius: 15px;
        font-size: 29px;
    }
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
    ${sizeMixin(35, 71, 1067, "margin-top")}
    width: 100%;
`

export const MarginTopProgress = styled.div`
    ${sizeMixin(20, 54, 1440, "margin-top")}
`






