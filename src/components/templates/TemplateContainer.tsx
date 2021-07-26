import tw from 'tailwind-styled-components'

export const TemplateContainer = tw.div`
  flex justify-center w-screen h-screen bg-gray-50
`

export const TemplateContent = tw.div`
  grid w-full h-full max-w-screen-lg grid-cols-2
`

export const TemplateAside = tw.aside`
  flex items-center justify-center
`

export const TemplateMain = tw.main`
  flex flex-col items-center justify-center gap-10
`

export const TemplateH1 = tw.h1`
  text-3xl font-bold
`

export const TemplateForm = tw.form`
  flex flex-col w-full max-w-xs gap-4
`
