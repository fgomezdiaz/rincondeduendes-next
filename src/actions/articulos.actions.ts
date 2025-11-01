import { Articulos } from "@/content/articulos/articulos";



export const getArticulosByMarca = async(marcaId: string) => {
    'use cache: remote'
    return Articulos.filter(articulo => articulo.marca === marcaId);
}