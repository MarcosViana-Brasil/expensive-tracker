import Link from "next/link"
import { InputText } from "../../src/components/molecules/InputText"
import { Button } from "../components/atoms/Button"

export const Login = () => {
  return (
    <div className='flex justify-center w-screen h-screen bg-gray-50'>
      <div className='grid w-full h-full max-w-screen-lg grid-cols-2'>
        <aside className='flex items-center justify-center'> 
          <img src="/wallet.svg" alt="wallet" />
        </aside>
        <main className='flex flex-col items-center justify-center gap-10'>
          <h1 className='text-3xl font-bold'>Controle seus gastos</h1>
          <form className='flex flex-col w-full gap-4'>
            <InputText type='text' label="E-mail" placeholder="digite seu e-mail" />

            <InputText type='password' label="Password" placeholder="digite sua senha" />

            <Button>Login</Button>

          </form>

          <Link href="/register">Criar Conta</Link>

        </main>
      </div>
    </div>
  )
}
