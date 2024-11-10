'use client'

import { getAllCategorias } from "@/actions/categorias.actions"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const NombreCategoriaSelecccionada = () => {

    const [nombre, setNombre] = useState<string>('')
    const [previousPath, setPreviousPath] = useState<string | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        if (previousPath !== pathname) {
          //console.log('La ruta ha cambiado:', pathname)
          const fetchNombre = async () => {
            const categorias = await getAllCategorias()
            if (pathname.includes('/juguetes/categoria/')) {
              const id = pathname.split('/').pop()
              const categoria = categorias.find(categoria => categoria.nombre === id)
              setNombre(`[${categoria!.nombre}]` || '')
            }else{
              setNombre('')
            }
          }
          fetchNombre()
          setPreviousPath(pathname)
        }
      }, [pathname, previousPath])
  return (
    <div>{nombre}</div>
  )
}
