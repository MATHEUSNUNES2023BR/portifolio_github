import styled from "styled-components"

import { Props } from "."

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: calc(
    ${({ fontSize }) => (fontSize ? fontSize + "px" : "14px")} + 0.7vh
  );
  font-weight: bold;
`
