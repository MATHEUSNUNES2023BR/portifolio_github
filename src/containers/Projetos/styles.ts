import styled from "styled-components"
export const Lista = styled.ul`
  display: grid;
  width: 91%;
  grid-template-columns: 1fr 1fr;
  column-gap: 35px;
  row-gap: 42px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
