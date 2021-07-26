import { TemplateAside } from "../templates/TemplateContainer"
import Image from 'next/image'

export const Sidebar = () => {
  return (
    <TemplateAside>
      <Image src="/wallet.svg" alt="wallet" width='600' height='600' />
    </TemplateAside>
  )
}
