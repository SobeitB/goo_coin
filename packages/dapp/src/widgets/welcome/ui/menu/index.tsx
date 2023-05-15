
import { useStore } from "effector-react";

import { Links, ListLinks, MenuWrapper, WrapperBtnMenu } from "./styled";

import { BtnMenuMobile } from "./menuBtn";
import { $isOpenMenu } from "widgets/welcome/lib";
import { linksAnchor } from "shared/config/router";

export const MenuMobile = () => {
  const isActive = useStore($isOpenMenu);

  return (
    <MenuWrapper isActive={isActive}>

      <ListLinks>
        {linksAnchor.map((link) => (
          <Links key={link.link} to={link.link}>
            {link.title}
          </Links>
        ))}
      </ListLinks>

      <WrapperBtnMenu isActive={isActive}>
        <BtnMenuMobile />
      </WrapperBtnMenu>

    </MenuWrapper>
  );
};

export { BtnMenuMobile } from "./menuBtn";
