'use client'
import { IArticulo } from '@/interfaces/articulos.interface'
import { useEffect } from 'react'

interface Props {
    articulos: IArticulo[]
}

export const PreloadImages = ({ articulos }: Props) => {
    useEffect(() => {
        // Pre-cargar imágenes sin transformaciones de Cloudinary (limitado)
        const allImages = Array.from(new Set(articulos.flatMap(articulo => articulo.imagenes)));
        const imagesToPreload = allImages.slice(0, 8);

        imagesToPreload.forEach((imagen) => {
            const img = new window.Image();
            img.src = `https://res.cloudinary.com/didkqst3j/image/upload/${imagen}`;
        });
    }, [articulos]);

    // Este componente no renderiza nada visible
    return null;
} 