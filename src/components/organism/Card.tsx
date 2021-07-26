import { Button } from "../atoms/Button";


export const Card = ({ expanse, category, price }) => {
  return (
  <article className='relative flex flex-col justify-center h-40 gap-2 p-4 bg-white shadow-md'>
    <Button variant='ghost' className='absolute top-0 right-0'>Excluir</Button>
    <h2 className='text-xl font-bold'>{expanse}</h2>
    <p className='flex items-center self-start justify-center px-8 text-purple-900 bg-purple-100 rounded-full'>{category}</p>
    <p className='font-medium'>{price}</p>
  </article>
  )
}




