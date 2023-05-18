import {useStore} from "effector-react";

import {
    BodyInput,
    BodyReferral,
    Description,
    InputReferral, ReferralBtn,
    ReferralCopy,
    Titleinvite,
} from "./referralProgram.styled.ts";


import copy from "./img/copy.svg";
import {inviteAnchor} from "shared/config/router";
import {$linkReferral, copyLink, createReferralLink} from "../model";
import {useRef} from "react";
import {Button} from "shared/ui/Button";
import {ButtonType} from "shared/ui/Button/config.ts";
import { aosFadeUp } from "shared/config/aos/index.ts";

export const ReferralProgram = () => {
  const inputAddress = useRef<HTMLInputElement>(null);
  const link = useStore($linkReferral);

  return (
      <BodyReferral id={inviteAnchor} data-aos={aosFadeUp}>
          <Titleinvite>Referral program</Titleinvite>

          <Description>Get a referral link</Description>

          <BodyInput>
              <InputReferral
                  placeholder="Enter Your Address (zksync)"
                  ref={inputAddress}
                  value={link ?? undefined}
              />

              <ReferralCopy src={copy} onClick={copyLink(link, inputAddress)} />
          </BodyInput>

          <ReferralBtn>
              <Button
                  type={ButtonType.GRADIENT_HOVER}
                  onClick={createReferralLink(inputAddress)}
              >
                  GET REFERRAL LINK
              </Button>
          </ReferralBtn>
      </BodyReferral>
  );
};
