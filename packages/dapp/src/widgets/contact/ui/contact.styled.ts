

import { sizeMixin } from "shared/lib/mixinsCSS";
import { BodyCenter } from "shared/ui/Container";
import styled  from "styled-components";



export const Body = styled(BodyCenter)`
    width: 100%;
    height: 141px;
    ${sizeMixin(35, 75, 1110, "margin-top")}

    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1100px) {
        padding: 0 10px;
    }
`

export const ItemsInfo = styled.div`
    height: 100%;
    width: 31.603773585%;

    background: rgba(3, 6, 65, 0.27);
    border: 7px solid var(--font-color-white);
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h2`
    font-weight: var(--font-weight-bold);

    ${sizeMixin(20, 36, 1110)}
`

export const Description = styled.p`
    font-weight: var(--font-weight-bold);
    ${sizeMixin(25, 45, 1110)}

`

