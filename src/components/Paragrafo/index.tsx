import { ReactNode } from "react"
import { P } from "./style"

export type Props = {
  children: ReactNode
  tipo?: "principal" | "secundario"
  fontSize?: number
  align?: string
}

const Paragrafo = ({
  align,
  fontSize,
  children,
  tipo = "principal",
}: Props) => (
  <P align={align} fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)
export default Paragrafo
