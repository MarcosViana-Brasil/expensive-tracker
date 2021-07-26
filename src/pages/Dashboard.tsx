import { Button } from '../components/atoms/Button'
import { TemplateContainer } from '../components/templates/TemplateContainer'
import Image from 'next/image'

export const Dashboard = () => {
  return (
    <TemplateContainer>
      <header className='flex items-center justify-between w-full max-w-screen-lg h-1/6'>
        <Image src='/dashboard.svg' alt='wallet' width='120' height='120' />
        <span className='text-2xl font-bold'>Expanse Tracker</span>

        <nav className='flex gap-4'>
          <Button>Adicionar Nova Conta</Button>
          <Button variant='ghost'>Sair</Button>
        </nav>

      </header>
    </TemplateContainer>
  )
}
