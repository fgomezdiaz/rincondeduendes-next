'use client'
import { getAllMarcas } from '@/actions/marcas.actions'
import { DrowpDownMarcas } from './drowndown/DropwDownMarcas'
//import { DropwDownCategorias } from './drowndown/DropwDownCategorias'
//import { getAllCategorias } from '@/actions/categorias.actions'
//import { headers } from 'next/headers'
import { useEffect, useState } from 'react';
import { IMarca } from '@/interfaces/marcas.interface';



  // const categorias = async() => {
  //   return await getAllCategorias()
  // }

  interface Props{
    children1: React.ReactNode,
    children2: React.ReactNode,
  }



export const TabJuguetesSelect = ({children1, children2}:Props) => {
  const [marcas, setMarcas] = useState<IMarca[]>([]);
  useEffect(() => {
    getAllMarcas().then(setMarcas);
  }, []);

  //const headersList = await headers()

  
  //console.log('headersList', headersList)
  
  return (
    <nav className="flex mx-auto items-center fixed w-full z-20 bg-gradient-to-r from-white/80 via-gray-200/80 to-white/80 backdrop-blur shadow-sm transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <div className='flex flex-row items-center'>
          <div className="mb-2 mr-6 text-2xl italic">
            { children1}
          </div>
          <DrowpDownMarcas marcas={marcas} />
          {/* <DropwDownCategorias categorias={await categorias()}/> */}
          <div className="mb-2 ml-6 text-2xl italic">
            { children2}
          </div>
        </div>
      </div>
    </nav>
  )
}
