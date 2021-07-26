import Image from 'next/image'

export const Imagem = ({ imagem, width, height }) => {
  return (
    <Image src={imagem} alt={imagem} width={width} height={height} />
  )
}


