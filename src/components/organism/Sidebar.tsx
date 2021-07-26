import { Imagem } from "../atoms/Imagem"
import { TemplateAside } from "../templates/TemplateContainer"
//import Image from 'next/image'

export const Sidebar = () => {
  return (
    <TemplateAside>
      <Imagem imagem="/wallet.svg" width='600' height='600' />
    </TemplateAside>
  )
}
