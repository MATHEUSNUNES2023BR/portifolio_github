import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { SidebarContainer, BotaoTema, Descricao } from "./styles"
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo textalign="center" fontSize={21}>
        Matheus
      </Titulo>
      <Paragrafo align="center" tipo="secundario">
        matheusnunes2023br
      </Paragrafo>
      <Descricao tipo="principal" align="center" fontSize={21}>
        Desenvolvedor Full Stack Python
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar
