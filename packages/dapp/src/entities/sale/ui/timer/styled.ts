import styled from "styled-components";
import { sizeMixin } from "shared/lib/mixinsCSS";

export const TimerBody = styled.div`
  width: 763px;

  background: rgba(1, 0, 29, 0.28);
  border: 7px solid #ffffff;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px 35px;

  margin: 0 auto;
  @media (max-width: 880px) {
    width: 100%;
  }

  @media (max-width: 590px) {
    height: 150px;
    padding: 10px;
    border-radius: 15px;
  }
`;

export const TimerTitle = styled.h1`
  ${sizeMixin(20, 36, 1067)};

  
`;

export const TimerWrapper = styled.div`
  width: 90.825688073394495%;
  height: 134px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background: rgba(1, 0, 29, 0.28);
  border-radius: 23px;

  @media (max-width: 590px) {
    height: 70px;
    border-radius: 10px;
    width: 93.851132686%;
  }
`;

export const TimerTextWrapper = styled.div`
  width: 78.499278499278499%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TimerTextBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const TimerTextTitle = styled.h2`
  ${sizeMixin(10, 20, 1067)};
  color: rgba(255, 255, 255, 0.65);

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 690px) {
    font-size: 12px;
  }

  @media (max-width: 590px) {
    font-size: 10px;
  }

  @media (max-width: 425px) {
    font-size: 7px;
  }
`;

export const TimerText = styled.h2`
  ${sizeMixin(40, 50, 1067)};
  font-weight: var(--font-weight-bold);

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 690px) {
    font-size: 27px;
  }

  @media (max-width: 590px) {
    font-size: 24px;
  }

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
