'use client'

import { getAllMarcas } from "@/actions/marcas.actions"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const NombreMarcaSelecccionada = () => {

    const [nombre, setNombre] = useState<string>('')
    const [previousPath, setPreviousPath] = useState<string | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        if (previousPath !== pathname) {
          //console.log('La ruta ha cambiado:', pathname)
          const fetchNombre = async () => {
            const marcas = await getAllMarcas()
            if (pathname.includes('/juguetes/marca/')) {
              const id = pathname.split('/').pop()
              const marca = marcas.find(marca => marca.id === id)
              setNombre(`[${marca!.nombre}]` || '')
            }else{
              setNombre('')
            }
          }
          fetchNombre()
          setPreviousPath(pathname)
        }
      }, [pathname, previousPath])
  return (
    <div className="text-xl italic">{nombre}</div>
  )
}
