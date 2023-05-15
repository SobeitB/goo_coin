import {
  BodyMainAfterPreSale,
  TablePlatforms,
  NamePlatforms,
  BodyPlatforms,
  TitlePlatforms,
  ListPlatforms,
  IconPlatforms, LinkPlatforms,
} from "./salePlatforms.styled";

import syncSwap from "./img/syncSwap.svg";
import Izumi from "./img/Izumi.svg";
import Dexscreener from "./img/Dexscreener.svg";
import {ButtonType} from "shared/ui/Button";
import {notificationStore} from "shared/lib/notification";
import {DEADLINE, NotificationType} from "shared/config/notification";
import {platforms} from "../config";

export const goToPlatform = () => {
  const deadline = 100; // MOCK
  if(deadline > 0) {
    return notificationStore.createNotification({
      text:DEADLINE,
      type:NotificationType.ERROR
    })
  }
}

export const SalePlatforms = () => {
  return (
    <BodyMainAfterPreSale>

        <TablePlatforms>
          <NamePlatforms>Buy Now</NamePlatforms>

          <ListPlatforms>
            <LinkPlatforms to={platforms.buyNow.SyncSwap}>
              <BodyPlatforms
                  typeBtn={ButtonType.GRADIENT_HOVER}
                  onClick={goToPlatform}
              >
                <IconPlatforms src={syncSwap} />
                <TitlePlatforms>SyncSwap</TitlePlatforms>
              </BodyPlatforms>
            </LinkPlatforms>

            <LinkPlatforms to={platforms.buyNow.Izumi}>
              <BodyPlatforms
                  typeBtn={ButtonType.GRADIENT_HOVER}
                  onClick={goToPlatform}
              >
                <IconPlatforms src={Izumi} />
                <TitlePlatforms>Izumi</TitlePlatforms>
              </BodyPlatforms>
            </LinkPlatforms>
          </ListPlatforms>
        </TablePlatforms>

        <TablePlatforms>
          <NamePlatforms>Tracking</NamePlatforms>

          <ListPlatforms style={{ justifyContent: "center" }}>
            <LinkPlatforms to={platforms.tracking.Dexscreener}>
              <BodyPlatforms
                  typeBtn={ButtonType.GRADIENT_HOVER}
                  onClick={goToPlatform}
              >
                <IconPlatforms src={Dexscreener} />
                <TitlePlatforms>Dexscreener</TitlePlatforms>
              </BodyPlatforms>
            </LinkPlatforms>
          </ListPlatforms>
        </TablePlatforms>
      </BodyMainAfterPreSale>
  );
};
