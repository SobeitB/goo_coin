

import styled from "styled-components";
import { BodyCenter } from "shared/ui/Container";
import {sizeMixin} from "shared/lib/mixinsCSS";

export const BodyCollabarations = styled(BodyCenter)`
  ${sizeMixin(101, 200, 1067, 'margin-top')}
`

export const BodyTokens = styled.div`
    width: 100%;

    margin-top: 78px;
    ${sizeMixin(47, 78, 1067, 'margin-top')}
    
    display: flex;
    align-items: center;
    justify-content: space-between;
  
  @media(max-width: 1100px) {
    padding: 0 25px;
  }

  @media(max-width: 970px) {
    flex-direction: column;
    gap:17px;
    justify-content: center;
  }
`


export const TokenItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-h3);
  ${sizeMixin(25, 36, 1067)}
`




