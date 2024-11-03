'use client'
import { getAllMarcas } from '@/actions/marcas.actions'
import { IMarca } from '@/interfaces/marcas.interface'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'






const MenuItem = ({ href, icon, children }: { href: string, icon: string, children: React.ReactNode }) => (
    <Link href={href} className="flex flex-row m-1 p-1 rounded-md transition-all hover:bg-gray-100 gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
      </svg>
      {children}
    </Link>
  )

export const TabJuguetesSelect = () => {

  const [nombre, setNombre] = useState<string>('')
  const [marcas, setMarcas] = useState<IMarca[]>([])
  const [previousPath, setPreviousPath] = useState<string | null>(null)
  const pathname = usePathname()
  

  useEffect(() => {
    if (previousPath !== pathname) {
      //console.log('La ruta ha cambiado:', pathname)
      const fetchNombre = async () => {
        const marcas = await getAllMarcas()
        setMarcas(marcas)
        if (pathname.includes('/juguetes/marca/')) {
          const id = pathname.split('/').pop()
          const marca = marcas.find(marca => marca.id === id)
          setNombre(`[${marca!.nombre}]` || '')
        }
      }
      fetchNombre()
      setPreviousPath(pathname)
    }
  }, [pathname, previousPath])




  return (
    <nav className="flex mx-auto items-center fixed w-full z-20 mt-2 md:mt-0">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <div className="mb-2 mr-6 text-2xl italic">
        { nombre}
        </div>
        <div className="dropdown dropdown-hover dropdown-center">
        
        <MenuItem href="#" 
            icon=""  >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"/>
            <path d="M6 9.01V9"/>
            <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/>
            </svg>
          Elegir marca
        </MenuItem>
        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[350px] p-1 shadow grid grid-cols-2 ">
            {
            (marcas).map((marca) => (
                <li className="p-0" key={marca.id}>
                <Link href={`/juguetes/marca/${marca.id}`}>
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
        </ul>
        </div>
        <div className="dropdown dropdown-hover">
        
        {/* <button className="btn btn-link">
            Elegir Categoría
        </button>  */}
        <MenuItem href="#" 
            icon=""  >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
                <path d="M2 10h20"/>
            </svg>
          Elegir categoría
        </MenuItem>
        
        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>En construcción</a></li>
            
        </ul>
        </div>
    </div>

    </nav>
  )
}
