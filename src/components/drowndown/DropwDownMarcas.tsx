'use client'
import { IMarca } from '@/interfaces/marcas.interface'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Props{
  marcas: IMarca[]
}

export const DrowpDownMarcas = ({marcas}:Props) => {
  const [isOpen, setIsOpen] = useState(true);

  // Función para alternar el estado de apertura del dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Función para cerrar el dropdown
  const closeDropdown = () => {
    setIsOpen(false);
    setTimeout(() => {setIsOpen(true)}, 500);
  };
  return (
    <div className='dropdown dropdown-hover dropdown-bottom'>
        <button onClick={toggleDropdown} className="flex flex-row m-1 p-1 rounded-md transition-all hover:bg-gray-100 gap-1" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"/>
            <path d="M6 9.01V9"/>
            <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/>
            </svg>
          Marca
        </button>
        {isOpen && (
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[200px] p-1 shadow grid grid-cols-1 md:grid-cols-2 md:w-[350px]">
                {
                marcas.map((marca) => (
                    <li className="p-0" key={marca.id}>
                    <Link href={`/juguetes/marca/${marca.id}`} onClick={closeDropdown}>
                        <Image
                            className="object-cover w-full rounded-sm "
                            src={`/imagenes/avatar/${marca.avatar}` || ''}
                            alt={marca.nombre}
                            height={30 }
                            width={30}
                            loading="lazy"
                        />
                        {marca.nombre}
                    </Link>
                    </li>
                ))
            }
            </ul>)}
    </div>
  )
}

