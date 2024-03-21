import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./style"

const Sobre = () => (
  <section>
    <Titulo>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ad, natus,
      ratione pariatur totam iste expedita non unde est soluta dolore, officia
      possimus ipsum commodi beatae esse omnis eligendi molestias.
    </Paragrafo>
    <GithubSecao>
      <img
        className="img1"
        src="https://github-readme-stats.vercel.app/api?username=MATHEUSNUNES2023BR&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        className="img2"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=MATHEUSNUNES2023BR&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)
export default Sobre
