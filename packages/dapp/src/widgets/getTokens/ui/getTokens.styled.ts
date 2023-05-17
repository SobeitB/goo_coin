
import styled  from "styled-components";

import { BodyCenter } from "shared/ui/Container";
import { sizeMixin } from "shared/lib/mixinsCSS";
import {BtnUI} from "shared/ui/Button";

export const Body = styled(BodyCenter)`
    ${sizeMixin(100, 200, 1067, "margin-top")};

    @media(max-width: 1100px) {
        padding: 0 20px;
    }
`

export const TabsMenu = styled.div`
  ${sizeMixin(80, 105, 1440, "margin-top")}
  display:flex;
  gap:5px;
  align-items: center;
  margin-bottom: 5px;
  margin-right: auto;
  @media(max-width: 650px) {
    width: 100%;
  }
`

export const Tab = styled.div
  .attrs((props:{isopen:boolean}) => props)`
  position: relative;
  ${sizeMixin(164, 331, 1440, "width")}
  ${sizeMixin(56, 100, 1440, "height")};
  & ${BtnUI}:fist-child {
    ${props => props.isopen && `background: red`}
  }
  
  @media(max-width: 768px) {
      ${sizeMixin(100, 250, 1440, "width")}
      ${sizeMixin(36, 80, 1440, "height")}
  }

  @media(max-width: 650px) {
    width: 50%;
    height:60px;
  }

  @media(max-width: 550px) {
    & ${BtnUI} {
      font-size: 32px;
      border-width: 5px;
    }
  }

  @media(max-width: 380px) {
    & ${BtnUI} {
      font-size: 27px;
    }
  }
`

export const WrapperGetTokens = styled.div
    .attrs((props: {isPresale:boolean}) => props)`
    width: 100%;
    
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




