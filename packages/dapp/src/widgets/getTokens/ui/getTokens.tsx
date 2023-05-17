import { Title } from "shared/ui/Title"
import {Body, BodyChoose, Tab, TabsMenu, WrapperGetTokens} from "./getTokens.styled"
import { Claim } from "features/Claim";
import { Presale } from "features/Presale";
import { useToogle } from "shared/lib/toogle";
import { claimAnchor } from "shared/config/router";
import {Button} from "shared/ui/Button";
import {ButtonType} from "shared/ui/Button";


export const GetTokens = () => {
    const [isPresale, setIsPresale] = useToogle();

    return(
        <Body id={claimAnchor}>
            <Title>You get zkGoose now</Title>

            <TabsMenu>
                <Tab isopen={!isPresale}>
                    <Button
                        type={ButtonType.TAB}
                        onClick={setIsPresale}
                    >Airdrop</Button>
                </Tab>

                <Tab isopen={isPresale}>
                    <Button
                        type={ButtonType.TAB}
                        onClick={setIsPresale}
                    >Presale</Button>
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