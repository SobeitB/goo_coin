
import styled from 'styled-components'
import {sizeMixin} from "shared/lib/mixinsCSS";

export const TimerBody = styled.div`
    width: 763px;
    height: 242px;

    background: rgba(1, 0, 29, 0.28);
    border: 7px solid #FFFFFF;
    border-radius: 30px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 25px 35px;


  margin: 0 auto;
  @media(max-width: 880px) {
    width: 72.049102927289896%;
  }
`

export const TimerTitle = styled.h1`
  ${sizeMixin(33,36, 1067)};
`


export const TimerWrapper = styled.div`
  width: 90.825688073394495%;
  height: 134px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background: rgba(1, 0, 29, 0.28);
  border-radius: 23px;
`


export const TimerTextWrapper = styled.div`
  width: 78.499278499278499%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TimerTextBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const TimerTextTitle = styled.h2`
  ${sizeMixin(10,20,1067)};
  color: rgba(255, 255, 255, 0.65);
`

export const TimerText = styled.h2`
  ${sizeMixin(40,50,1067)};
  font-weight: var(--font-weight-bold);
`