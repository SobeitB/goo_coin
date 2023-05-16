
import styled from "styled-components";

import { sizeMixin } from "shared/lib/mixinsCSS";
import {BtnUI, ButtonType} from "../../../shared/ui/Button";
import {Link} from "atomic-router-react";


export const BodyMainAfterPreSale = styled.div`
  width: 100%;
  height: 271px;

  font-size: var(--font-size-h1);

  ${sizeMixin(88, 200, 1067, "margin-top")}
  ${sizeMixin(32, 48, 1067)}

  display: flex;
  align-items: center;

  flex-direction: column;
  justify-content: space-between;
  padding: 15px 45px;


  @media(max-width: 950px) {
    height: auto;
    gap:50px;
  }

  @media(max-width: 450px) {
    padding: 15px 30px;
  }

  @media(max-width: 360px) {
    padding: 15px 10px;
  }
`;

export const TablePlatforms = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 29.587628866% 70.412371134%;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 1015px) {
    grid-template-columns: 24.587628866% 75.412371134%;
  }

  @media(max-width: 950px) {
    display: flex;
    flex-direction: column;
    gap:45px;
  }
`;

export const ListPlatforms = styled.div`
  display: flex;
  align-items: center;
  gap:63px;

  @media(max-width: 700px) {
    gap:30px;
  }

  @media(max-width: 660px) {
    gap:10px;
  }

  @media(max-width: 640px) {
    flex-direction: column;
    gap:21px;
  }
`

export const NamePlatforms = styled.p`
`;

export const TitlePlatforms = styled.p`
  ${sizeMixin(32, 38, 1067)}

  font-weight:var(--font-weight-bold);
  margin-left: 23px;

  @media (max-width:450px) {
    margin-left: 8px;
  }
`


export const BodyPlatforms = styled(BtnUI)`
  min-width: 310px;
  max-width: 370px;
  height: 103px;

  padding: 17px 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover ${TitlePlatforms} {
    display: none;
  }

  &:hover {
    justify-content:center;
  }

  @media (max-width:450px) {
    padding: 17px 18px;
  }

  @media (max-width:400px) {
    max-width: 100%;
    min-width: 100%;
  }
`;


export const IconPlatforms = styled.img`
  @media (max-width:430px) {
    height: 80%;
  }
`
