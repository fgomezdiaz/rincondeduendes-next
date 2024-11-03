import Image from "next/image"
import cover from "@/assets/images/Cover.png"

export const ImagenFondo = () => {
  return (
    <div className="relative w-full h-96 mt-2 md:mt-0">
    <Image
      src={cover}
      alt="Colorful abstract background"
      width={1200}
      height={1200}
      className="object-cover w-full h-52 md:h-full"
    />
    <div className="container mx-auto absolute inset-0 flex flex-col items-center max-w-4xl justify-center ">
        <p className="text-base md:text-xl leading-relaxed text-black italic mt-8 max-w-72 md:max-w-none md:mt-0  md:mx-10">
            Juguetería alternativa donde los juguetes artesanales de siempre conviven con las últimas
            innovaciones en artículos de madera responsable (eco-friendly).
        </p>

        <p className="mt-4  md:m-6 mb-8 text-base text-black italic ">
            Construimos fantasía con juguetes de verdad!
        </p>
    </div>
  </div>
  )
}
