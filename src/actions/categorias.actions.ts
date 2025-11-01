'use server'

import { Articulos } from "@/content/articulos/articulos";
import { Categorias } from "@/content/categorias/categorias";
import { TCategoria } from "@/interfaces/categorias.interface";

export const getAllCategorias = async() => {
    'use cache'
    return Categorias;
}

export const getArticulosByCategoria = async(categoria: TCategoria) => {
    'use cache: remote'
    const articulos = Articulos.filter(articulo => articulo.categoria?.includes(categoria));

    return articulos
}
