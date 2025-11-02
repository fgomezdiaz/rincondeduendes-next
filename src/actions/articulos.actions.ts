'use server'

import { Articulos } from "@/content/articulos/articulos";

/**
 * Obtiene TODOS los artículos
 * Usa 'use cache' porque los datos son estáticos y no cambian con el tiempo
 * Se cachea en build time para máximo rendimiento
 */
export const getAllArticulos = async() => {
    'use cache'
    return Articulos;
}

/**
 * Obtiene artículos filtrados por marca
 * Usa 'use cache' porque los datos son estáticos y no cambian con el tiempo
 * Se cachea en build time para páginas estáticas
 */
export const getArticulosByMarca = async(marcaId: string) => {
    'use cache'
    
    return Articulos.filter(articulo => articulo.marca === marcaId);
}