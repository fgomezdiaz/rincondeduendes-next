'use client'
import { IMarca } from "@/interfaces/marcas.interface"
import { CldImage } from "next-cloudinary"
import Image from "next/image"
import LOGO from '../assets/images/LOGO2.png'
interface Props{
    marca: IMarca
}


export const CardMarca = ({marca}:Props) => {

  return (
    <div className="w-full max-w-md mx-auto border rounded-md flex flex-col shadow-sm border-gray-500 ">
        <div className="p-0">
                <a href={`/juguetes/marca/${marca.id}`}>
                <CldImage
                className="object-cover w-full h-48 rounded-t-lg  "
                src={marca.imagenCloudinary || ''}
                width={1000}
                height={1000}
                crop='fit'
                alt={marca.nombre}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                </a>
        
        </div>
    <div className=" flex flex-1 p-4">
        <div className="flex items-start space-x-4">
        <Image
                className="object-cover h-10 w-10 rounded-full"
                src={`/imagenes/avatar/${marca.avatar}` || ''}
                alt={marca.nombre}
                height={30 }
                width={30}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
        <div>
            <h2 className="text-xl font-semibold">{marca.nombre}</h2>
            <p className="text-sm text-gray-500 text-justify ">{marca.descripcion}</p>
        </div>
        </div>
    </div>
    <div className="px-4 py-3 border-t flex items-center justify-center space-x-4">
        {
        marca.distribuidorAutorizado && 
            <div className="flex flex-row gap-2 items-center justify-start flex-1 ">
            <div className="">
                <Image src={LOGO} alt={"Rincón de Duendes"} width={50} height={50} className='object-cover object-center' loading={'lazy'} />
            </div>

            <div className="flex items-center justify-center bg-gray-50 p-2 rounded-md shadow-sm text-sm text-gray-600">
                <span className="text-center italic font-semibold">
                <strong>Distribuidor autorizado</strong>
                </span>
            </div>
            </div>
        
        }
        <div className="h-5 w-5 text-blue-500 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        
        </div>

    </div>
</div>
  )
}
