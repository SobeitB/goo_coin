
import styled  from "styled-components";

import { BodyCenter } from "shared/ui/Container";
import { sizeMixin } from "shared/lib/mixinsCSS";

export const Body = styled(BodyCenter)`
    ${sizeMixin(100, 200, 1067, "margin-top")};

    @media(max-width: 1100px) {
        padding: 0 20px;
    }
`

export const WrapperGetTokens = styled.div`
    width: 100%;
    ${sizeMixin(80, 105, 1067, "margin-top")}
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;

    background: var(--bg-color-blue-blur);
    border: 7px solid var(--font-color-white);
    border-radius: 30px;
    
    
`

export const TitleGet = styled.h2`
    font-weight: var(--font-weight-bold);
    font-size: 45px;
`

export const BodyChoose = styled.div
    .attrs((props:{isopen:boolean}) => props)`
    display: ${props => props.isopen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`




