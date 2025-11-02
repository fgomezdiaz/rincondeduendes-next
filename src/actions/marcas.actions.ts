'use server'
import {Marcas} from '@/content/marcas/marcas';
import { cacheTag } from 'next/cache';

export const getAllMarcas = async() => {
    'use cache'
    return Marcas;
}

export const getMarcaById = async(id: string) => {
    'use cache: remote'
    cacheTag(`marca-${id}`)
    return Marcas.find(marca => marca.id === id);
}