
import Countdown from "react-countdown";

import {TimerBody, TimerTitle, TimerWrapper} from "./styled"
import {timerTemplate} from "./timer.tsx";

interface TimerProps {
    timeLeft: number;
}

export const Timer = ({timeLeft}:TimerProps) => {
    return(
        <TimerBody>
              <TimerTitle>Time left</TimerTitle>

              <TimerWrapper>
                    <Countdown date={Date.now() + timeLeft} renderer={timerTemplate} />
              </TimerWrapper>
        </TimerBody>
    )
}