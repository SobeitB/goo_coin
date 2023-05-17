
import styled, {keyframes} from "styled-components";
import {sizeMixin} from "shared/lib/mixinsCSS";
import {ButtonType, typeBtnStyle} from "./config.ts";

export const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

export const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`

export const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

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

  & .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  & .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: ${ellipsis1} 0.6s infinite;
  }
  & .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: ${ellipsis3} 0.6s infinite;
  }
  

`