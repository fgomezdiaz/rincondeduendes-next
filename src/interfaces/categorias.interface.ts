export type TCategoria = | 'Madera' | 'Construcciones' | 'Tangram' | 'Juguetes de cartón' | "Puzzles" | "Sonajeros"
export interface ICategoria {
    id: string;
    nombre: TCategoria;
    descripcion?: string;
    avatar: string;
}
