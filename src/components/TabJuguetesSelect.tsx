import { getAllMarcas } from '@/actions/marcas.actions'
import { DrowpDownMarcas } from './drowndown/DropwDownMarcas'
import { DropwDownCategorias } from './drowndown/DropwDownCategorias'
import { getAllCategorias } from '@/actions/categorias.actions'
import { headers } from 'next/headers'



  const marcas = async() => {
    return await getAllMarcas()
  }

  const categorias = async() => {
    return await getAllCategorias()
  }

  interface Props{
    children1: React.ReactNode,
    children2: React.ReactNode,
  }



export const TabJuguetesSelect = async ({children1, children2}:Props) => {
  const headersList = await headers()

  
  console.log('headersList', headersList)
  
  return (
    <nav className="flex mx-auto items-center fixed w-full z-20 mt-2 md:mt-0">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <div className='flex flex-row'>
          <div className="mb-2 mr-6 text-2xl italic">
            { children1}
          </div>
          <DrowpDownMarcas marcas={await marcas()} />
          <DropwDownCategorias categorias={await categorias()}/>
          <div className="mb-2 ml-6 text-2xl italic">
            { children2}
          </div>
        </div>
    </div>
    </nav>
  )
}
