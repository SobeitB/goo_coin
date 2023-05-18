import { Title } from "shared/ui/Title"
import {Body, BodyChoose, BodyCircle, Tab, TabsMenu, WrapperGetTokens} from "./getTokens.styled"
import { Claim } from "features/Claim";
import { Presale } from "features/Presale";
import { useToogle } from "shared/lib/toogle";
import { claimAnchor } from "shared/config/router";
import {Button} from "shared/ui/Button";
import {ButtonType} from "shared/ui/Button";
import {NotificationCircle} from "shared/ui/NotificationCircle";
import { aosFadeUp } from "shared/config/aos";
// import tabClaim from "./ui/tabClaim.png";
// import tabPresale from "./ui/tabPresale.png";


export const GetTokens = () => {
    const [isPresale, setIsPresale] = useToogle();

    return(
        <Body id={claimAnchor}>
            <Title data-aos={aosFadeUp}>You get zkGoose now</Title>

            <TabsMenu>
                <Tab isopen={!isPresale}>
                    <Button
                        type={ButtonType.TAB}
                        onClick={setIsPresale}
                    >Airdrop</Button>

                    {/*<TabImg src={tabClaim} />*/}
                </Tab>

                <Tab isopen={isPresale}>
                    <Button
                        type={ButtonType.TAB}
                        onClick={setIsPresale}
                    >Presale</Button>

                    <BodyCircle>
                        <NotificationCircle >
                            Push
                        </NotificationCircle>
                    </BodyCircle>

                    {/*<TabImg src={tabPresale} />*/}
                </Tab>
            </TabsMenu>

            <WrapperGetTokens isPresale={isPresale}>
                <Title>You get zkGoose now</Title>

                <BodyChoose isopen={!isPresale} >
                    <Claim />
                </BodyChoose>

                <BodyChoose isopen={isPresale}>
                    <Presale />
                </BodyChoose>
            </WrapperGetTokens>
        </Body>
    )
}