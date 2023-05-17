

import { sizeMixin } from "shared/lib/mixinsCSS";
import { BodyCenter } from "shared/ui/Container";
import styled  from "styled-components";



export const Body = styled(BodyCenter)`
    width: 100%;
    height: auto;
    ${sizeMixin(35, 75, 1110, "margin-top")}

    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1100px) {
        padding: 0 10px;
    }

    @media (max-width: 920px) {
        display: grid;
        grid-template-columns: repeat(2, 49.152542372881356%);
        grid-template-rows: 1fr 1fr;
        align-items: center;
        grid-template-areas: 'header1 header2' 'footer footer';
        gap: 20px;
        padding: 0 20px;
    }
`

export const ItemsInfo = styled.div`
    height: 141px;
    width: 31.603773585%;

    background: rgba(3, 6, 65, 0.27);
    border: 7px solid var(--font-color-white);
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    padding: 5px;

    @media (max-width: 920px) {
        width: 100%;
        height: 120px;
        margin: 0 auto;
        &:nth-child(1) {
            grid-area: header1;
        }
        &:nth-child(2) {
            grid-area: header2;
        }
        &:nth-child(3) {
            width: 50%;
            grid-area: footer;
        }
    }

    @media (max-width: 768px) {
        height: 70px;
        border: 4px solid var(--font-color-white);
        border-radius: 20px;
        max-width: 230px;
    }
`

export const Title = styled.h2`
    font-weight: var(--font-weight-bold);


    font-size: 36px;
    @media(max-width: 1594px) {
      ${sizeMixin(20, 36, 1440)};
    }


    @media(max-width: 768px) {
        font-size: 20px;
    }

    @media(max-width: 450px) {
        font-size: 15px;
    }

    @media(max-width: 330px) {
        font-size: 12px;
    }
`

export const Description = styled.p`
    font-weight: var(--font-weight-bold);
    
      font-size: 45px;
      @media(max-width: 1594px) {
        ${sizeMixin(25, 45, 1440)};
      }
    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media(max-width: 450px) {
        font-size: 17px;
    }

    @media(max-width: 330px) {
        font-size: 14px;
    }
`

