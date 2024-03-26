import styled from "styled-components"

import { Props } from "."

export const Titulo = styled.h3<Props>`
  color: #282a35;
  margin: 14px 0;
  text-align: ${({ textalign }) => (textalign ? textalign : "start")};
  font-size: calc(
    ${({ fontSize }) => (fontSize ? fontSize + "px" : "14px")} + 0.77vh
  );
  font-weight: bold;
`
