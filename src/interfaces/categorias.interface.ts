export type TCategoria = | 'Madera' | 'Construcciones' | 'Tangram' | 'Juguetes de cartón' | "Puzzles" | "Sonajeros" | "De_0_a_1"
export interface ICategoria {
    id: string;
    nombre: TCategoria;
    descripcion?: string;
    avatar: string;
}
