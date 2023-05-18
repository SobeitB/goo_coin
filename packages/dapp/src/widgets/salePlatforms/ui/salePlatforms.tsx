
import { useStore } from "effector-react";

import {
  BodyMainAfterPreSale,
  TablePlatforms,
  NamePlatforms,
  BodyPlatforms,
  TitlePlatforms,
  ListPlatforms,
  IconPlatforms,
} from "./salePlatforms.styled";

import syncSwap from "./img/syncSwap.svg";
import Izumi from "./img/Izumi.svg";
import Dexscreener from "./img/Dexscreener.svg";
import {ButtonType} from "shared/ui/Button";
import {notificationStore} from "shared/lib/notification";
import {DEADLINE, NotificationType} from "shared/config/notification";
import {platforms} from "../config";
import { $deadline } from "entities/sale";
import { aosFadeUp } from "shared/config/aos";

export const goToPlatform = (deadline: number, link:string) => () => {
  if(deadline > 0) {
    return notificationStore.createNotification({
      text:DEADLINE,
      type:NotificationType.ERROR
    })
  }

  window.open(link)
}

export const SalePlatforms = () => {
  const deadline = useStore($deadline)
  
  return (
    <BodyMainAfterPreSale>

        <TablePlatforms data-aos={aosFadeUp}>
          <NamePlatforms>Buy Now</NamePlatforms>

          <ListPlatforms>
              <BodyPlatforms
                  typeBtn={ButtonType.GRADIENT_HOVER}
                  onClick={goToPlatform(deadline, platforms.buyNow.SyncSwap)}
              >
                <IconPlatforms src={syncSwap} />
                <TitlePlatforms>SyncSwap</TitlePlatforms>
              </BodyPlatforms>

              <BodyPlatforms
                  typeBtn={ButtonType.GRADIENT_HOVER}
                  onClick={goToPlatform(deadline, platforms.buyNow.Izumi)}
              >
                <IconPlatforms src={Izumi} />
                <TitlePlatforms>Izumi</TitlePlatforms>
              </BodyPlatforms>
          </ListPlatforms>
        </TablePlatforms>

        <TablePlatforms data-aos={aosFadeUp}>
          <NamePlatforms>Tracking</NamePlatforms>

          <ListPlatforms style={{ justifyContent: "center" }}>
              <BodyPlatforms
                  typeBtn={ButtonType.GRADIENT_HOVER}
                  onClick={goToPlatform(deadline, platforms.tracking.Dexscreener)}
              >
                <IconPlatforms src={Dexscreener} />
                <TitlePlatforms>Dexscreener</TitlePlatforms>
              </BodyPlatforms>
          </ListPlatforms>
        </TablePlatforms>
      </BodyMainAfterPreSale>
  );
};
