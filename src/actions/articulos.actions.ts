import { Articulos } from "@/content/articulos/articulos";



export const getArticulosByMarca = async(marcaId: string) => {
    return Articulos.filter(articulo => articulo.marca === marcaId);
}