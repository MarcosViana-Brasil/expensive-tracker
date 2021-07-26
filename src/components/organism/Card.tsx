import { ButtonEditar } from "../atoms/ButtonEditar";
import { ButtonExcluir } from "../atoms/ButtonExcluir";


export const Card = ({ expanse, category, price }) => {
  return (
  <article className='relative flex flex-col justify-center h-40 gap-2 p-4 bg-white shadow-md'>
    <h2 className='text-xl font-bold'>{expanse}</h2>
    <p className='flex items-center self-start justify-center px-8 text-purple-900 bg-purple-100 rounded-full'>{category}</p>
    <p className='font-medium'>{price}</p>

    <footer style={{flex: 1, flexDirection: 'row', marginLeft: 30}}>
      <ButtonEditar variant='ghost'>Editar</ButtonEditar>
      <ButtonExcluir variant='ghost'>Excluir</ButtonExcluir>
    </footer>  
  </article>
  )
}




