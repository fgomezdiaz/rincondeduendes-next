'use server'

import { Articulos } from "@/content/articulos/articulos";
import { Categorias } from "@/content/categorias/categorias";
import { TCategoria } from "@/interfaces/categorias.interface";
import { cacheLife, cacheTag } from "next/cache";

export const getAllCategorias = async() => {
    'use cache'
    return Categorias;
}

export const getArticulosByCategoria = async(categoria: TCategoria) => {
    'use cache: remote'
    
    // Tag único para invalidación
    cacheTag(`articulos-categoria-${categoria}`)
    
    // Cachear por 1 hora
    cacheLife({ expire: 3600 })
    
    const articulos = Articulos.filter(articulo => articulo.categoria?.includes(categoria));

    return articulos
}
