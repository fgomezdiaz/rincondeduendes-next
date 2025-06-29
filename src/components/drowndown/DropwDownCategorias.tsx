'use client'

import { ICategoria } from '@/interfaces/categorias.interface';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image';

interface Props{
  categorias: ICategoria[]
}

export const DropwDownCategorias = ({categorias}:Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex flex-row m-1 p-1 rounded-md transition-all hover:bg-gray-100 gap-1"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
            <path d="M2 10h20"/>
        </svg>
        Categoría
      </button>
      {isOpen && (
        <ul
          tabIndex={0}
          className="absolute left-0 mt-2 menu bg-base-100 rounded-box z-[1] w-[200px] p-1 shadow grid grid-cols-1 md:grid-cols-2 md:w-[350px]"
        >
          {categorias.map((categoria) => (
            <li className="p-0" key={categoria.id}>
              <Link href={`/juguetes/categoria/${categoria.nombre}`} onClick={closeDropdown}>
                <Image
                  className="object-cover w-full rounded-sm "
                  src={`/imagenes/avatar/${categoria.avatar}` || ''}
                  alt={categoria.nombre}
                  height={30}
                  width={30}
                  loading="lazy"
                />
                {categoria.nombre}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

