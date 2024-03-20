import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }
  body{
    padding-top: 56px;
  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 14vw auto;
  column-gap: 7vw;
  img {
    max-width: 100%;
  }
`