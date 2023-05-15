import { sizeMixin } from "shared/lib/mixinsCSS";
import styled from "styled-components";

export const Title = styled.h1`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-h1);

  ${sizeMixin(32, 48, 1067)}
`;
