
import {memo, RefObject} from "react";
import {useStore} from "effector-react";

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
import {MIN_PRICE, PRICE_TOKEN} from "entities/sale/config";
import {$inputSend, onInputSend} from "../../model";


export const Swap = memo(({inputSend}:{inputSend:RefObject<HTMLInputElement>}) => {
    const value = useStore($inputSend)
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
                        placeholder={`${MIN_PRICE} eth min`}
                        value={value}
                        onChange={(e:any) => onInputSend(e.target.value as string)}
                        ref={inputSend}
                        min="-1"
                        max="1"
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
                        value={(+value / PRICE_TOKEN).toFixed(0)}
                    />

                    <BodyToken>
                        <ImgToken src='/icon.svg' />
                        <TextToken>GOO</TextToken>
                    </BodyToken>
                </InputBody>
            </SwapItem>
        </BodySwap>
    )
})