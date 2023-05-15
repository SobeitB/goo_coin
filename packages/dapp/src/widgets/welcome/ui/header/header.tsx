import { Link } from "atomic-router-react";

import { socLinks } from "widgets/welcome/config";
import {
  ContainerHeader,
  ImgIcon,
  Links,
  LinksList,
  SocBody,
  Title,
  TitleBody,
  WrapperContainer,
} from "./header.styled";
import icon from "./img/icon.svg";
import { BackgroundMusic } from "features/BackgroundMusic";

import { MenuMobile, BtnMenuMobile } from "../menu";
import { linksAnchor } from "shared/config/router";

export const Header = () => {
  return (
    <>
      <ContainerHeader>
        <WrapperContainer>
          <TitleBody>
            <Title src={icon} />
          </TitleBody>

          <LinksList>
            {linksAnchor.map((link) => (
              <Links key={link.link} to={link.link}>
                {link.title}
              </Links>
            ))}
          </LinksList>

          <BackgroundMusic />

          <SocBody>
            {socLinks.map((link) => (
              <Link to={link.link} key={link.link} target="_blank">
                <ImgIcon src={link.img} />
              </Link>
            ))}
          </SocBody>

          <BtnMenuMobile />
        </WrapperContainer>
      </ContainerHeader>

      <MenuMobile />
    </>
  );
};
