
import styled from "styled-components";
import {sizeMixin} from "shared/lib/mixinsCSS";
import {ButtonType, typeBtnStyle} from "./config.ts";

export const BtnUI = styled.button
    .attrs((props: { typeBtn:ButtonType }) => props)`
  width: 100%;
  height: 100%;
  background: ${({typeBtn}) => typeBtnStyle[typeBtn ?? ButtonType.DEFAULT].background};
  &:hover {
    background: ${({typeBtn}) => typeBtnStyle[typeBtn ?? ButtonType.DEFAULT].backgroundHover};
  }
  &:focus {
    background: ${({typeBtn}) => typeBtnStyle[typeBtn ?? ButtonType.DEFAULT].backgroundClick};
  }
  transition: all 0.5s ease-in;
  border: 5px solid var(--font-color-white);
  border-radius: 20px;
  font-weight: var(--font-weight-bold);
  ${sizeMixin(30, 38, 1440)};

  @media (max-width: 500px) {
    border-radius: 10px;
    border-width: 7px;
  }
`