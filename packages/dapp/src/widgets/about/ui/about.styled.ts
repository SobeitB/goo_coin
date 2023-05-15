import { sizeMixin } from "shared/lib/mixinsCSS";
import { BodyCenter } from "shared/ui/Container";
import { styled } from "styled-components";

export const BodyInfo = styled(BodyCenter)`
  width: 100%;
`;


export const Description = styled.h2`
  font-size: var(--font-size-h4);
  text-align: center;

  ${sizeMixin(25, 33, 1067)}
  ${sizeMixin(67, 100, 1067, "margin-top")}

  @media (max-width: 1050px) {
    padding: 0 30px;
  }
`;

export const Paragraph = styled.p`
  &:not(:first-child) {
    margin-top: 20px;
  }
`
