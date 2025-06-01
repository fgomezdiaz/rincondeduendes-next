export type TCategoria = | "Muñecas" | "Varios" | "Calcamonías" | 'Madera' | 'Construcciones' | 'Tangram' | 'Juguetes de cartón' | "Puzzles" | "Sonajeros" | "De_0_a_1" | "Marionetas" | "Animales" | "Música" | "Cuentacuentos"
export interface ICategoria {
    id: string;
    nombre: TCategoria;
    descripcion?: string;
    avatar: string;
}
