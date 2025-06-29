'use client'
import { IMarca } from '@/interfaces/marcas.interface'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

interface Props{
  marcas: IMarca[]
}

export const DrowpDownMarcas = ({marcas}:Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<{[key: string]: boolean}>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const closeDropdown = () => setIsOpen(false);

  // Pre-cargar imagen de Cloudinary de forma más agresiva
  const handleMarcaInteraction = (marca: IMarca) => {
    if (!preloadedImages[marca.imagenCloudinary] && marca.imagenCloudinary) {
      const img = new window.Image();
      img.onload = () => {
        setPreloadedImages(prev => ({ ...prev, [marca.imagenCloudinary]: true }));
      };
      img.onerror = () => {
        setPreloadedImages(prev => ({ ...prev, [marca.imagenCloudinary]: true }));
      };
      // Usar URL optimizada para carga más rápida
      img.src = `https://res.cloudinary.com/demo/image/upload/f_auto,q_60,w_800/${marca.imagenCloudinary}`;
    }
  };

  // Pre-cargar todas las imágenes cuando se abre el dropdown
  useEffect(() => {
    if (isOpen) {
      marcas.forEach(marca => {
        if (marca.imagenCloudinary) {
          handleMarcaInteraction(marca);
        }
      });
    }
  }, [isOpen, marcas]);

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
          <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"/>
          <path d="M6 9.01V9"/>
          <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/>
        </svg>
        Marca
      </button>
      {isOpen && (
        <ul
          tabIndex={0}
          className="absolute left-[-100px] md:left-0 mt-2 menu bg-base-100 rounded-box z-[1] w-[200px] p-1 shadow grid grid-cols-1 md:grid-cols-2 md:w-[350px]"
        >
          {marcas.map((marca) => (
            <li className="p-0" key={marca.id}>
              <Link 
                href={`/juguetes/marca/${marca.id}`} 
                onClick={closeDropdown}
                onMouseEnter={() => handleMarcaInteraction(marca)}
                onFocus={() => handleMarcaInteraction(marca)}
                className="flex items-center gap-2 p-2 hover:bg-gray-50 transition-colors"
              >
                <Image
                  className="object-cover w-8 h-8 rounded-sm"
                  src={`/imagenes/avatar/${marca.avatar}` || ''}
                  alt={marca.nombre}
                  height={30}
                  width={30}
                  loading="lazy"
                />
                <span className="text-sm">{marca.nombre}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

