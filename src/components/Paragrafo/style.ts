import styled from "styled-components"
import { Props } from "."
export const P = styled.p<Props>`
  font-size: calc(14px + 0.7vh);
  color: ${({ tipo }) => (tipo === "principal" ? "#282A35" : "#949494")};
  line-height: 28px;
`
