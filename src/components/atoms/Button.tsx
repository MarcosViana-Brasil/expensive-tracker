import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button 
      { ...props }
      className='h-10 font-bold text-white bg-purple-400 hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-gray-200'
    >
      { children }
    </button>
  )
}
