import { TCategoria } from "./categorias.interface";


export interface IArticulo {
    id: string;
    titulo: string
    descripciones: string[];
    precio: string;
    marca: string;
    nameMarca?: string;
    categoria?: TCategoria[];
    referencias: string[];
    imagenes: string[];
}