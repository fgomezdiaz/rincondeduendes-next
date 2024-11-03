import { getAllMarcas } from '@/actions/marcas.actions'
import { DrowpDownMarcas } from './drowndown/DropwDownMarcas'
import { DropwDownCategorias } from './drowndown/DropwDownCategorias'

  const marcas = async() => {
    return await getAllMarcas()
  }

  interface Props{
    children: React.ReactNode
  }

export const TabJuguetesSelect = async ({children}:Props) => {

  return (
    <nav className="flex mx-auto items-center fixed w-full z-20 mt-2 md:mt-0">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <div className="mb-2 mr-6 text-2xl italic">
        { children}
        </div>
        <DrowpDownMarcas marcas={await marcas()} />
        <DropwDownCategorias />
    </div>

    </nav>
  )
}
