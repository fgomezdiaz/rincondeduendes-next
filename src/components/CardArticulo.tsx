'use client'
import { IArticulo } from '@/interfaces/articulos.interface'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

interface Props{
    articulo: IArticulo
}

export const CardArticulo = ({articulo}:Props) => {
    const [imgSeleccionada, setImgSeleccionada] = useState(articulo.imagenes[0]);
    const [indice, setIndice] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});
    const [mainImageLoaded, setMainImageLoaded] = useState(false);
    // Eliminado background removal para no consumir add-on de Cloudinary
    const pathname = usePathname();
  
    const onChangeImage = (imagen: string) => {
        setImgSeleccionada(imagen);
        setIndice(articulo.imagenes.indexOf(imagen));
        // Si la imagen ya está cargada, mostrarla inmediatamente
        if (imagesLoaded[imagen]) {
            setMainImageLoaded(true);
        } else {
            setMainImageLoaded(false);
        }
    }

    // Pre-cargar imágenes sin transformaciones de Cloudinary
    useEffect(() => {
        const preloadImages = async () => {
            const loadPromises = articulo.imagenes.map((imagen) => {
                return new Promise<void>((resolve) => {
                    const img = new window.Image();
                    img.onload = () => {
                        setImagesLoaded(prev => ({ ...prev, [imagen]: true }));
                        // Si es la imagen principal, marcarla como cargada
                        if (imagen === articulo.imagenes[0]) {
                            setMainImageLoaded(true);
                        }
                        resolve();
                    };
                    img.onerror = () => {
                        setImagesLoaded(prev => ({ ...prev, [imagen]: true }));
                        if (imagen === articulo.imagenes[0]) {
                            setMainImageLoaded(true);
                        }
                        resolve();
                    };
                    // Usar URL directa sin transformaciones
                    img.src = `https://res.cloudinary.com/didkqst3j/image/upload/${imagen}`;
                });
            });
            
            await Promise.all(loadPromises);
        };

        preloadImages();
    }, [articulo.imagenes]);
  
    return (
        <div className="w-full max-w-80  mx-auto border border-gray-300 rounded-md flex flex-col max-h-[650px] bg-white" >
        <div className="p-0 relative h-60 overflow-hidden rounded-t-lg flex items-center justify-center bg-white" 
             style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)' }}>
            {/* Placeholder con fondo gris claro */}
            <div 
                className={clsx(
                    "absolute inset-0 bg-white rounded-t-lg transition-opacity duration-300 z-10",
                    {
                        'opacity-0': mainImageLoaded,
                        'opacity-100': !mainImageLoaded
                    }
                )}
            />
            
            <Image
                id='mainImage'
                className={clsx(
                    "transition-opacity duration-300 w-full h-full object-cover relative z-0",
                    {
                        'opacity-100': mainImageLoaded,
                        'opacity-0': !mainImageLoaded
                    }
                )}
                key={`${imgSeleccionada}-no-transform`}
                src={`https://res.cloudinary.com/didkqst3j/image/upload/${imgSeleccionada || ''}`}
                width={400}
                height={240}
                alt={articulo.titulo}
                loading="eager"
                priority={true}
                onLoad={() => setMainImageLoaded(true)}
                onError={() => setMainImageLoaded(true)}
            />
            {/* Línea horizontal sutil al final de la cabecera (ligeramente arriba para evitar la máscara) */}
            <div className="pointer-events-none absolute bottom-[4px] left-4 right-4 h-px bg-gradient-to-r from-transparent via-slate-600/45 to-transparent" />
            {/* Resplandor muy sutil, mismo ancho que la línea */}
            <div className="pointer-events-none absolute bottom-[1px] left-4 right-4 h-[4px] bg-gradient-to-r from-transparent via-slate-500/40 to-transparent blur-[1px]" />
        </div>
        <div className=" flex flex-1 p-4">
          <div id="thumbnailGallery" className="grid grid-cols-6 gap-2">
            {articulo.imagenes.map((imagen, index) => (
              <button 
                key={index} 
                onClick={onChangeImage.bind(null, imagen)}
                className={
                    clsx('thumbnail relative aspect-square rounded-md overflow-hidden transition-all duration-200 bg-white',
                        {
                            'ring-2 ring-primary ring-offset-2': indice === index,
                            'opacity-100': imagesLoaded[imagen],
                            'opacity-50': !imagesLoaded[imagen]
                        }
                    )
                }
              >
                <Image
                  src={`https://res.cloudinary.com/didkqst3j/image/upload/${imagen}`}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover relative z-0"
                  loading="lazy"
                  sizes="(max-width: 640px) 20vw, 10vw"
                />
              </button>
            ))}
          </div>
        </div>
        <div>
          {
            pathname.includes('categoria') && (
              <p className="text-xl px-4 pt-2 font-semibold" > 
                Marca: <span id="categoria" className="text-gray-500">{articulo.nameMarca}</span></p>)
          }
          <p className="text-xl px-4 pt-2 font-bold border-b-2 pb-2" > 
            <span id="descripcion" className="text-gray-500">{articulo.descripciones[indice]}</span></p>
          <p className="text-xl px-4 pt-2 font-semibold" > 
           Referencia: <span id="referencia" className="text-gray-500">{articulo.referencias[indice]}</span></p>
          <p className="text-xl px-4 pt-2 font-semibold pb-4 " >
            PVP: <span id="precio" className="text-gray-500">{articulo.precio}</span></p>
        </div>
        {/* <div className="px-4 py-3 border-t flex items-center justify-center space-x-4">
          <div className="h-5 w-5 text-blue-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            
          </div>
        </div> */}
      </div>
  )
}
