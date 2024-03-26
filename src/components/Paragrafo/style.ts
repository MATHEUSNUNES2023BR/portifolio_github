import styled from "styled-components"
import { Props } from "."
export const P = styled.p<Props>`
  text-align: ${({ align }) => (align ? align : "start")};
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize + "px" : "calc(14px + 0.7vh)"};
  color: ${props =>
    props.tipo === "principal"
      ? props.theme.corPrinciapl
      : props.theme.corSecundaria};
  line-height: 28px;
`
