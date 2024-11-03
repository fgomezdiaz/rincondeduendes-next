import Image from 'next/image';
import portada_libreria from '@/assets/images/portada_libreria2.png';

export default function LibrosPage() {
    return (
        <div className="container mx-auto px-2 md:px-12 py-8 ">
          {/* Sección principal */}
    
           <section >
			<div className="mx-auto flex px-8 py-2 lg:py-0 lg:flex-row flex-col items-center ">
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-8 md:mb-0 lg:order-first">
                    <Image
                        src={portada_libreria}
                        alt="Imagen"
                        width={1110}
                        height={340}
                        className="object-cover object-center rounded-2xl "
                    />
                </div>
				<div className=" lg:w-1/2 w-full pl-0 lg:pl-20 z-10">
					<h1 className="text-xl mb-4 font-medium italic">Jugar, crecer y cuidar el planeta</h1>
					<blockquote className="text-base italic font-semibold text-gray-900">
						<svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
							<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
						</svg>
                        <p className="mb-4 md:mb-8 text-justify">“Descubre el poder de la lectura en nuestra selección de libros infantiles, cuidadosamente elegidos para inspirar y nutrir la imaginación de los más pequeños. Desde cuentos clásicos hasta emocionantes aventuras contemporáneas, nuestros libros fomentan el amor por la lectura, la creatividad y el aprendizaje. Cada página es una puerta a nuevos mundos que los niños podrán explorar, soñar y compartir.”</p>
					</blockquote>
				</div>
			</div>
		</section>

    </div>
    );
}