import {
    BodySwap,
    BodyToken,
    HeaderSwapItem,
    HeaderText,
    ImgToken,
    InputBody,
    InputCount, NextSwap,
    SwapItem,
    TextToken
} from "./styled.ts";

import eth from './img/eth.svg'
import next from 'shared/assets/img/next.svg'
export const Swap = () => {
    return(
        <BodySwap>
            <SwapItem>
                <HeaderSwapItem>
                    <HeaderText>Send</HeaderText>
                    <HeaderText>Ethereum zksync</HeaderText>
                </HeaderSwapItem>

                <InputBody>
                    <InputCount
                        type="number"
                        placeholder="0.005 eth min"
                    />

                    <BodyToken>
                        <ImgToken src={eth} />
                        <TextToken>ETH</TextToken>
                    </BodyToken>

                    <NextSwap src={next} />
                </InputBody>
            </SwapItem>

            <SwapItem>
                <HeaderSwapItem>
                    <HeaderText>Receive</HeaderText>
                    <HeaderText>zkGoose</HeaderText>
                </HeaderSwapItem>

                <InputBody>
                    <InputCount
                        type="number"
                        placeholder="0.0000000"
                    />

                    <BodyToken>
                        <ImgToken src='/icon.svg' />
                        <TextToken>GOO</TextToken>
                    </BodyToken>
                </InputBody>
            </SwapItem>
        </BodySwap>
    )
}