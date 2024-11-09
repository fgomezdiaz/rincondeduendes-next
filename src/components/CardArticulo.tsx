'use client'
import { IArticulo } from '@/interfaces/articulos.interface'
import { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import clsx from 'clsx';

interface Props{
    articulo: IArticulo
}

export const CardArticulo = ({articulo}:Props) => {
    const [imgSeleccionada, setImgSeleccionada] = useState(articulo.imagenes[0]);
    const [indice, setIndice] = useState(0);
  
    const onChangeImage = (imagen: string) => {
        setImgSeleccionada(imagen);
        setIndice(articulo.imagenes.indexOf(imagen));
    }
  
  
    return (
        <div className="w-full max-w-md  mx-auto border border-gray-500 rounded-md flex flex-col max-h-[650px] bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 " >
        <div className="p-0" >
      
              <CldImage
                id='mainImage'
                className="object-cover h-72 rounded-t-lg "
                src={imgSeleccionada || ''}
                width={1500}
                height={1000}
                alt={articulo.titulo}
      
              />
        
        </div>
        <div className=" flex flex-1 p-4">
          <div id="thumbnailGallery" className="grid grid-cols-6 gap-2">
            {articulo.imagenes.map((imagen, index) => (
              <button key={index} onClick={onChangeImage.bind(null, imagen)}
                className={
                    clsx('thumbnail relative aspect-square rounded-md overflow-hidden',
                        {
                            'ring-2 ring-primary ring-offset-2': indice === index,
                        }
                    )
                }
              >
                <CldImage
                  src={imagen}
                  alt={`Thumbnail ${index + 1}`}
                  width={90}
                  height={90}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div>
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
