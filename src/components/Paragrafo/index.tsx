import { ReactNode } from "react"
import { P } from "./style"

export type Props = {
  children: ReactNode
  tipo?: string
}

const Paragrafo = ({ children }: Props) => <P>{children}</P>
export default Paragrafo
