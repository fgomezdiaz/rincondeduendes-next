'use client'

import { ICategoria } from '@/interfaces/categorias.interface';
import Link from 'next/link';
import { useState } from 'react'
import Image from 'next/image';

interface Props{
  categorias: ICategoria[]
}

export const DropwDownCategorias = ({categorias}:Props) => {
  const [isOpen, setIsOpen] = useState(true);

  // Función para alternar el estado de apertura del dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Función para cerrar el dropdown
  const closeDropdown = () => {
    setIsOpen(false);
    setTimeout(() => {setIsOpen(true)}, 500);
  };
  return (
    <div className='dropdown dropdown-hover'>
      <button onClick={toggleDropdown} className="flex flex-row m-1 p-1 rounded-md transition-all hover:bg-gray-100 gap-1" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
            <path d="M2 10h20"/>
        </svg>
      Elegir categoría
    </button>
        {isOpen && (
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[350px] p-1 shadow grid grid-cols-2">
        {
        categorias.map((categoria) => (
            <li className="p-0" key={categoria.id}>
            <Link href={`/juguetes/categoria/${categoria.nombre}`} onClick={closeDropdown}>
                <Image
                    className="object-cover w-full rounded-sm "
                    src={`/imagenes/avatar/${categoria.avatar}` || ''}
                    alt={categoria.nombre}
                    height={30 }
                    width={30}
                    loading="lazy"
                />
                {categoria.nombre}
            </Link>
            </li>
        ))
    }
    </ul>)}
    </div>
  )
}

