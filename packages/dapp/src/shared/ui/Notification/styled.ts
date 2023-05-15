import { NotificationType } from "shared/config/notification";
import styled, { keyframes } from "styled-components";

const animationNotification = keyframes`
    0% {
        right:-268px;
    }
    
    10%{
      right:24px;
    }

      85%{
        right:24px;
      }
    
    100%{
      right:-268px;
    }
`;

export const BodyNotification = styled.div
  .attrs((props: { theme: NotificationType }) => props)`
  max-width:70%;
  min-height: 46px;
  position: fixed;
  z-index: 10000;
  right: 24px;
  top: 50px;

  background: #01001D;
  border: 7px solid var(--font-color-white);
  border-radius: 30px;

  animation: 7s ${animationNotification} ease-in-out forwards;

  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  padding: 30px 40px;

  font-weight: 400;
  font-size: var(${(props) => props.theme === NotificationType.INFO 
    ? "--font-size-x-small"
    : "--font-size-h4"
  });
  color: var(--font-color-white);

  @media(max-width: 780px) {
    font-size:${(props) => props.theme !== NotificationType.INFO
        && "25px"
    };
  }

  @media(max-width: 600px) {
    font-size:${(props) => props.theme !== NotificationType.INFO
            && "23px"
    };
  }

  @media(max-width: 400px) {
    font-size:${(props) => props.theme !== NotificationType.INFO
            && "19px"
    };
    padding: 20px;
  }
`;

export const NotificationText = styled.p.attrs(
  (props: { color: string }) => props
)`
  &:not(:first-child) {
    margin-top: 8px;
  }

  color: ${(props) => props.color && props.color};
`;

export const BodyIcon = styled.div`
  width: 304px;
  height: 304px;
  background: rgba(255, 255, 255, 0.3);
  border: 12px solid var(--font-color-white);

  border-radius: 50%;

  margin-bottom: 50px;

  @media(max-width: 1440px) {
    width: 254px;
    height: 254px;
    margin-bottom: 20px;
  }

  @media(max-width: 1000px) {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    border-width:7px;
    
    & img {
      width: 60%;
    }
  }
  
  @media(max-width: 780px) {
    width: 170px;
    height: 170px;
    border-width:5px;
  }
  
  @media(max-width: 600px) {
    width: 140px;
    height: 140px;
    margin-bottom: 10px;
  }

  @media(max-width: 400px) {
    width: 120px;
    height: 120px;
  }
`

export const BorderType = styled.div
.attrs((props: { theme: NotificationType }) => props)`
  width:100%;
  height:100%;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 12px solid 
    ${props => props.theme === NotificationType.ERROR ?
      '#DE0000'
      :
      '#27C100'
    }
  ;

  @media(max-width: 1000px) {
    border-width:7px;
  }

  @media(max-width: 780px) {
    border-width:5px;
  }
`


