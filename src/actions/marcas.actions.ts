'use server'
import {Marcas} from '@/content/marcas/marcas';

export const getAllMarcas = async() => {
    return Marcas;
}

export const getMarcaById = async(id: string) => {
    return Marcas.find(marca => marca.id === id);
}