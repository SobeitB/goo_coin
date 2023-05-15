

import { sizeMixin } from "shared/lib/mixinsCSS";
import { Title } from "shared/ui/Title";
import styled from "styled-components";
import {BtnUI} from "shared/ui/Button";


export const BodyReferral = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${sizeMixin(100, 200, 1440, "margin-top")}
    ${sizeMixin(14, 32, 1067, "padding")}

    background: var(--bg-color-blue-blur);
    border: 7px solid var(--font-color-white);
    border-radius: 30px;

    @media (max-width: 1100px) {
        width: 95%;
        margin: 0 auto;
        ${sizeMixin(100, 200, 1067, "margin-top")}
    }

    @media (max-width: 550px) {
        margin-top:100px;
        width: 86.933333333%;
    }
`

export const Titleinvite = styled(Title)`
    @media (max-width: 500px) {
        text-align: center;
        font-size: 37px;
    }

    @media (max-width: 450px) {
        font-size: 33px;
    }
`

export const Description = styled.h2`
    ${sizeMixin(20, 40, 1067)}
    ${sizeMixin(26, 51, 1067, "margin-top")}

    @media (max-width: 550px) {
        margin-top:26px;
    }

    @media (max-width: 500px) {
        font-size: 25px;
    }

    @media (max-width: 450px) {
        font-size: 20px;
    }
`

export const BodyInput = styled.div`
    position: relative;
    width: 87.25398313%;
    height: 91px;
    margin-top:27px;

    @media (max-width: 1100px) {
        width: 100%;
    }

    @media (max-width: 550px) {
        height: 52px;
        margin-top:33px;
    }
`

export const InputReferral = styled.input`
    width: 100%;
    height: 100%;
    background:rgba(255, 255, 255, 0.76);;
    border: 7px solid var(--font-color-white);
    border-radius: 20px;

    padding-right: 80px;
    padding-left: 30px;

    text-align:center;
    color: rgba(38, 38, 88, 0.25);
    ${sizeMixin(16, 33, 1067)}

    &::-webkit-input-placeholder {
        text-align:center;
        color: rgba(38, 38, 88, 0.25);
        ${sizeMixin(16, 33, 1067)}
    }

    @media (max-width: 768px) {
        text-align:left;
        &::-webkit-input-placeholder {
            text-align:left;
        }
    }

    @media (max-width: 550px) {
        font-size: 16px;
        &::-webkit-input-placeholder {
            font-size: 16px;
        }

        padding-right: 45px;
        padding-left: 20px;
        border-radius: 10px;
    }
`

export const ReferralCopy = styled.img`
    position: absolute;
    width: 36.37px;
    height: 41.83px;

    right: 28px;
    top:50%;
    transform: translateY(-50%);

    cursor: pointer;

    @media (max-width: 550px) {
        width: 21px;
        height: 24px;
        right: 15px;
    }
`

export const ReferralBtn = styled.div`

  width: 408px;
  height: 81px;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-h4);

  
  & ${BtnUI} {
    ${sizeMixin(22, 33, 1067)};
  }
  ${sizeMixin(26, 52, 1067, "margin-top")};

  @media (max-width: 550px) {
      width: 93.959731544%;
      & ${BtnUI} {
        font-size: 20px !important;
      }
      margin-top: 26px;
    }

  @media (max-width: 370px) {
    font-size: 16px;
  }
`
