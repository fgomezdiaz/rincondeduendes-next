export type TCategoria = | 'Madera' | 'Construcciones' | 'Tangram' | 'Juguetes de cartón' | "Puzzles" | "Sonajeros" | "De_0_a_1" | "Marionetas" | "Animales"
export interface ICategoria {
    id: string;
    nombre: TCategoria;
    descripcion?: string;
    avatar: string;
}
