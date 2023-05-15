import {
  BodyReferral,
  Description,
  BodyInput,
  InputReferral,
  ReferralCopy,
  ReferralBtn,
  Titleinvite,
} from "./referralProgram.styled";
import copy from "./img/copy.svg";
import { inviteAnchor } from "shared/config/router";

export const ReferralProgram = () => {
  return (
    <BodyReferral id={inviteAnchor}>
      <Titleinvite>Referral program</Titleinvite>

      <Description>Get a referral link</Description>

      <BodyInput>
        <InputReferral placeholder="Enter Your Address (zksync)" />

        <ReferralCopy src={copy} />
      </BodyInput>

      <ReferralBtn>GET REFERRAL LINK</ReferralBtn>
    </BodyReferral>
  );
};
