
import styled  from "styled-components";

import { BodyCenter } from "shared/ui/Container";
import { sizeMixin } from "shared/lib/mixinsCSS";

export const Body = styled(BodyCenter)`
    ${sizeMixin(100, 200, 1067, "margin-top")};

    @media(max-width: 1100px) {
        padding: 0 20px;
    }
`

export const TabsMenu = styled.div`

`

export const WrapperGetTokens = styled.div
    .attrs((props: {isPresale:boolean}) => props)`
    width: 100%;
    ${sizeMixin(80, 105, 1067, "margin-top")}
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${sizeMixin(10, 40, 1440, "padding-top")}
    ${sizeMixin(28, 57, 1440, "padding-bottom")}
    ${sizeMixin(9, 20, 1440, "padding-right")}
    ${sizeMixin(9, 20, 1440, "padding-left")}

    background: ${props => props.isPresale ? '#020236' : 'var(--bg-color-blue-blur)'};
    border: 7px solid var(--font-color-white);
    border-radius: 30px;
    
    
`

export const BodyChoose = styled.div
    .attrs((props:{isopen:boolean}) => props)`
    display: ${props => props.isopen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`




