import { sizeMixin } from "shared/lib/mixinsCSS";
import styled from "styled-components";

export const Title = styled.h1`
  font-weight: var(--font-weight-bold);
  text-align: center;

  ${sizeMixin(32, 48, 1067)}
`;
