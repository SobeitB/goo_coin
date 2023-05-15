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


export const SalePlatforms = () => {
  return (
    <BodyMainAfterPreSale>

        <TablePlatforms>
          <NamePlatforms>Buy Now</NamePlatforms>

          <ListPlatforms>
            <BodyPlatforms>
              <IconPlatforms src={syncSwap} />
              <TitlePlatforms>SyncSwap</TitlePlatforms>
            </BodyPlatforms>

            <BodyPlatforms>
              <IconPlatforms src={Izumi} />
              <TitlePlatforms>Izumi</TitlePlatforms>
            </BodyPlatforms>
          </ListPlatforms>
        </TablePlatforms>

        <TablePlatforms>
          <NamePlatforms>Tracking</NamePlatforms>

          <ListPlatforms style={{ justifyContent: "center" }}>
            <BodyPlatforms>
              <IconPlatforms src={Dexscreener} />
              <TitlePlatforms>Dexscreener</TitlePlatforms>
            </BodyPlatforms>
          </ListPlatforms>
        </TablePlatforms>
      </BodyMainAfterPreSale>
  );
};
