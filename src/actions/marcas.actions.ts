'use server'
import {Marcas} from '@/content/marcas/marcas';

export const getAllMarcas = async() => {
    'use cache'
    return Marcas;
}

export const getMarcaById = async(id: string) => {
    'use cache: remote'
    return Marcas.find(marca => marca.id === id);
}