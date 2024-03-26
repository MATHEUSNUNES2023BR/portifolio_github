import { ReactNode } from "react"
import { Titulo as TituloEstilo } from "./style"

export type Props = {
  children: ReactNode
  fontSize?: number
  textalign?: string
}
const Titulo = ({ children, fontSize, textalign }: Props) => (
  <TituloEstilo textalign={textalign} fontSize={fontSize}>
    <span> {children} </span>
  </TituloEstilo>
)
export default Titulo
