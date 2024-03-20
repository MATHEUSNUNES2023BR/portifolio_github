import { ReactNode } from "react"
import { Titulo as TituloEstilo } from "./style"

export type Props = {
  children: ReactNode
  fontSize?: number
}
const Titulo = ({ children, fontSize }: Props) => (
  <TituloEstilo fontSize={fontSize}>
    <span> {children} </span>
  </TituloEstilo>
)
export default Titulo
