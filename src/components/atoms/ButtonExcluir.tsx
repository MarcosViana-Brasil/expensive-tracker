  import { ButtonHTMLAttributes } from "react"
import tw from "tailwind-styled-components"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'ghost'  
}

export const ButtonExcluir = ({ children, variant, ...props }: Props) => {
  if(variant === 'ghost') {
    return (
      <GhostButton { ...props } style={{borderRadius: 5}}>
        { children }
      </GhostButton>
    )
  }

  return (    
     <MainButton { ...props } style={{borderRadius: 5}}>
        { children }
      </MainButton>
  )  
}

export const BaseButton = tw.button`
  h-10 px-8 font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-200 
`

export const MainButton = tw(BaseButton)`
   bg-red-500 hover:bg-red-600
`

export const GhostButton = tw(BaseButton)`
  bg-trasparent hover:bg-red-200 text-red-500
`