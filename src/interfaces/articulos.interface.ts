

export interface IArticulo {
    id: string;
    titulo: string
    descripciones: string[];
    precio: string;
    marca: string;
    categoria?: string[];
    referencias: string[];
    imagenes: string[];
}