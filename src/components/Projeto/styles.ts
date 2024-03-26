import styled from "styled-components"
export const Card = styled.div`
  border: 1px solid ${props => props.theme.corDaBorda};
  padding: 14px;
`
export const LinkBotao = styled.a`
  color: ${props => props.theme.corDeFundo};
  font-size: calc(7.7px + 1.54vh);
  display: inline-block;
  cursor: pointer;
  background-color: ${props => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 7px;
  border-radius: 2.8px;
  margin-top: 21px;
`
