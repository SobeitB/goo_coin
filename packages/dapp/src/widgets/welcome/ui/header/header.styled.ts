import styled from "styled-components";
import { Link } from "atomic-router-react";

import header from "./img/header.png";
import { sizeMixin } from "shared/lib/mixinsCSS";

export const ContainerHeader = styled.header`

  background-image: url(${header});
  background-position: 50% 50%;
  background-size: 100% 100%;

  width: 100%;
  height: calc(24px + 61 * (100vw / 1440));
  @media (max-width: 767px) {
    height: calc(24px + (61 + 61 * 0.7) * (100vw / 1440));
  }

  padding: 0 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 940px) {
    padding: 0 20px;
  }
`;

export const WrapperContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 16.71641791% 64.104477612% 9.776119403% 10.820895522%;
  grid-template-rows: 1fr;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1150px) {
    grid-template-columns: 16.71641791% 64.104477612% 5.776119403% 10.820895522%;
  }

  @media (max-width: 850px) {
    display: flex;
  }
`;

export const TitleBody = styled.div`
  position: relative;
  text-align: center;

  ${sizeMixin(100, 184, 1440, "width")};
  ${sizeMixin(20, 41, 1440, "height")};

  @media (max-width: 1120px) {
    width: 145px;
    height: 30px;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Title = styled.img`
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  object-position: center;
`;

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Links = styled(Link)`
  ${sizeMixin(12, 20, 1440)};
`;

export const SocBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const ImgIcon = styled.img`
  cursor: pointer;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 80%;
  }
`;
