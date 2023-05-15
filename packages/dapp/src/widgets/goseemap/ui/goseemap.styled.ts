

import { sizeMixin } from 'shared/lib/mixinsCSS'
import { BodyCenter } from 'shared/ui/Container'
import styled from 'styled-components'


export const GoSeeMapBody = styled(BodyCenter)`
    ${sizeMixin(126, 200, 1076, "margin-top")}
`

export const GoSeeMapWrapper = styled.div`
    ${sizeMixin(58, 75, 1076, "margin-top")}
    width: 100%;
    height: 460px;
    
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap:47px;
 
    @media (max-width: 1100px) {
        padding: 0 30px;
    }

    @media (max-width: 1030px) {
        flex-direction: column;
        align-items: center;
        height: auto;
    }
`

export const Item = styled.li`
    &:not(:first-child) {
        margin-top: 10px;
    }

    &::before {
    content: "● ";
        font-family: monospace; 
        margin-left: -2ch; 
    }

    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-x-small);

`

export const PhaseBody = styled.div`
    width: 30.365510778%;
    height: 100%;

    padding: 17px 0;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--bg-color-blue-blur);
    border: 7px solid var(--font-color-white);
    border-radius: 30px;

    &:first-child ${Item}, &:last-child ${Item} {
        &:not(:first-child) {
            margin-top: 25px;
        }
    }

    @media (max-width: 1030px) {
        width: 100%;
        padding: 17px 0 50px;
    }
`

export const NextImg = styled.img
    .attrs((props:{index:number, bottom:boolean}) => props)`
    position: absolute;
    right:-51px;

    display:${props => props.index === 3 && 'none'};
    ${props => props.bottom && props.index === 2 ? "bottom" : 'top'}:${props => props.index === 1 ? 
        '50'
        :
        '25'
    }%;
    
    transform:translateY(-${props => props.index === 1 ? 
        '50'
        :
        '25'
    }%);

    @media (max-width: 1030px) {
        top:auto;
        bottom:-57px;

        ${props => props.bottom && props.index === 1 ? "left" : 'right'}:${props => props.index === 1 ? 
            '44px'
            :
            '50%'
        };

        transform: rotate(90deg) translateY(-${props => props.index === 2 ? '50' : '0'}%);
    }
`

export const PhaseTitle = styled.h4`
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-h3);    
`

export const ListItems = styled.ul`
    margin-top: 6px;
    width: 73.456790123%;
`

export const Description = styled.h3`
    font-weight: var(--font-weight-bold);
    text-align:center;

    ${sizeMixin(20, 36, 1067)}
    ${sizeMixin(27, 75, 1067, "margin-top")}

    @media (max-width:1000px) {
        padding:0 20px
    }
`




