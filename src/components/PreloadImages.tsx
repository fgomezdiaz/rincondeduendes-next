'use client'
import { IArticulo } from '@/interfaces/articulos.interface'
import { useEffect } from 'react'

interface Props {
    articulos: IArticulo[]
}

export const PreloadImages = ({ articulos }: Props) => {
    useEffect(() => {
        // Pre-cargar todas las imágenes de todos los artículos inmediatamente
        const allImages = articulos.flatMap(articulo => articulo.imagenes);
        
        allImages.forEach((imagen) => {
            const img = new window.Image();
            img.src = `https://res.cloudinary.com/didkqst3j/image/upload/f_auto,q_60,w_800/${imagen}`;
        });
    }, [articulos]);

    // Este componente no renderiza nada visible
    return null;
} 