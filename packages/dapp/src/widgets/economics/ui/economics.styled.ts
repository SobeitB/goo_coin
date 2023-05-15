
import { sizeMixin } from 'shared/lib/mixinsCSS'
import { BodyCenter } from 'shared/ui/Container'
import styled from 'styled-components'


export const BodyEconomics = styled(BodyCenter)`
    ${sizeMixin(101, 200, 1067, "margin-top")}
`

export const BodyDescription = styled.div`
    ${sizeMixin(22, 75, 1067, "margin-top")}
    margin-right: auto;

    @media (max-width: 1100px) {
        margin-right: 0;
    }
`

export const TokenSupplyTitle = styled.h2`
    ${sizeMixin(20, 40, 1067)}
    text-align: right;
    @media (max-width: 1100px) {
        text-align: center;
    }
`

export const TokenSupply = styled.h2`
    text-align: right;
    @media (max-width: 1100px) {
        text-align: center;
    }
    margin-right: 25px;

    ${sizeMixin(20, 40, 1067)}
    ${sizeMixin(12, 20, 1067, "margin-top")}
`

export const BodyImg = styled.div`
    margin-top: 75px;
    max-width: 100%;
    height: auto;
`

export const EconomicsImg = styled.img`
    width: 100%;
    height: 100%;
    padding: 0 20px;
`



