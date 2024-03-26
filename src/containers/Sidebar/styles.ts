import styled from "styled-components"
import { P } from "../../components/Paragrafo/style"
export const Descricao = styled(P)`
  margin-top: 21px;
  margin-bottom: 35px;
`
export const BotaoTema = styled.button`
  display: block;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 7px;
  margin: 0 auto;
  padding: 7px;
  color: ${props => props.theme.corDeFundo};
  background-color: ${props => props.theme.corPrinciapl};
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    margin-bottom: 35px;
  }
`
