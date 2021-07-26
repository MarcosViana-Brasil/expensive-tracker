import { Button } from '../components/atoms/Button'
import { TemplateContainer } from '../components/templates/TemplateContainer'
import { Card } from '../components/organism/Card'
import Image from 'next/image'
import Router from 'next/router'
import { ButtonAdicionar } from '../components/atoms/ButtonAdicionar'

export const Dashboard = () => {

  const array = [
    {id: '0', expanse: 'Netflix', category: 'streaming', price: 39.59},
    {id: '1', expanse: 'Vivo', category: 'internet', price: 129.99},
    {id: '2', expanse: 'Vivo', category: 'celular', price: 39.99},
    {id: '3', expanse: 'Luz', category: 'recursos', price: 249.17},
    {id: '4', expanse: 'Água', category: 'recursos', price: 59.38}
  ]

  const handleNavigatetoNewExpanse = () => {
    Router.push('/dashboard/add') 
  }

  const handleNavigatetoSair = () => {
    Router.push('/') 
  }
  

  return (
    <TemplateContainer>
      <header className='flex items-center justify-between w-full max-w-screen-lg h-1/6'>
        <Image src='/dashboard.svg' alt='wallet' width='120' height='120' />
        <span className='text-2xl font-bold'>Expanse Tracker</span>

        <nav className='flex gap-4'>
          <ButtonAdicionar onClick={handleNavigatetoNewExpanse}>Adicionar Nova Conta</ButtonAdicionar>
          <Button onClick={handleNavigatetoSair} variant='ghost'>Sair</Button>
        </nav>

      </header>

      <main className='grid content-start w-full max-w-screen-lg grid-cols-3 gap-4 p-4 overflow-y-scroll h-5/6 bg-purple-50'>
        {array?.map((item) => (
          <Card key={item.id} expanse={item.expanse} category={item.category} price={item.price} />
        ))}

      </main>
    </TemplateContainer>
  )
}
