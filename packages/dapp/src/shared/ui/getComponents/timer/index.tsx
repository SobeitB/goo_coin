
import Countdown from "react-countdown";
import { useStore } from "effector-react";

import {TimerBody, TimerTitle, TimerWrapper} from "./styled"
import {timerTemplate} from "./timer.tsx";
import { $deadline } from "entities/sale/index.ts";

export const Timer = () => {
    const timer = useStore($deadline);

    return(
        <TimerBody>
              <TimerTitle>Time left</TimerTitle>

              <TimerWrapper>
                    <Countdown date={Date.now() + timer * 1000} renderer={timerTemplate} />
              </TimerWrapper>
        </TimerBody>
    )
}