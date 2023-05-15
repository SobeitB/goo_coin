import { styled } from "styled-components";

export const ImgIcon = styled.img`
  cursor: pointer;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 30%;
  }

  @media (max-width: 850px) {
    display: none;
  }

  @media (max-width: 1150px) {
    width: 50%;
  }
`;
