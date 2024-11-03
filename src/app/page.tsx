import Image from "next/image";
import { ImagenFondo } from "@/components/ImagenFondo";

import creativas_2 from "@/assets/images/creativas_2.jpg";
import creativas_5 from "@/assets/images/creativas_5.jpg";
import creativas_7 from "@/assets/images/creativas_7.jpg";
import creativas_10 from "@/assets/images/creativas_10.jpg";


export default function Home() {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto mb-2">
		<ImagenFondo />
		{/* Sección 1 */}
		<section >
			<div className="mx-auto flex px-8 py-14 lg:flex-row flex-col items-center">
				<div className=" w-full lg:w-1/2 flex flex-col items-start text-left mb-2 md:mb-0 z-10">
					<h1 className="text-xl mb-4 font-medium italic">Entra en el mundo de los juguetes de madera</h1>
					<blockquote className="text-base italic font-semibold text-gray-900">
						<svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
							<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
						</svg>
						<p className="mb-4 md:mb-8">Acompañar el juego de niños y niñas con juguetes de madera es elegir naturalidad, calidad y cercanía. La madera es un material bonito, cálido, resistente y único. Además, se trabaja con facilidad. Optar por juguetes de madera es una decisión que fomenta la creatividad y la conexión con la naturaleza.</p>
					</blockquote>
					
				</div>
				<div className="lg:w-1/2 w-full pl-0 lg:pl-20 ">
					<Image
						src={creativas_2}
						alt="Imagen"
						width={1110}
						height={340}
						className="object-cover object-center rounded-2xl "
						loading={'eager'}
					/>
				</div>
			</div>
		</section>
		{/* Sección 2 */}
		<section >
			<div className="mx-auto flex px-8 py-2 lg:py-0 lg:flex-row flex-col items-center ">
				<div className=" lg:w-1/2 w-full pl-0 lg:pl-20 z-10">
					<h1 className="text-xl mb-4 font-medium italic">Selección de juguetes</h1>
					<blockquote className="text-base italic font-semibold text-gray-900">
						<svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
							<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
						</svg>
						<p className="mb-4 md:mb-8">“Explora nuestra colección de juguetes artesanales y de madera. Desde cocinitas y casitas de muñecas hasta bloques de construcción y juegos sensoriales, ofrecemos una variedad que estimula el aprendizaje y la diversión. Nuestros juguetes duraderos y de calidad son ideales para pasar de generación en generación”</p>
					</blockquote>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-8 md:mb-0 lg:order-first">
					<Image
						src={creativas_5}
						alt="Imagen"
						width={1110}
						height={340}
						className="object-cover object-center rounded-2xl "
						loading={'eager'}
					/>
				</div>
			</div>
		</section>
		{/* Sección 3 */}
		<section >
			<div className="mx-auto flex px-8 py-2 lg:flex-row flex-col items-center ">
				<div className=" w-full lg:w-1/2 flex flex-col items-start text-left mb-2 md:mb-0 z-10">
	
					<h1 className="text-xl mb-4 font-medium italic">Beneficios de los juguetes de madera</h1>
					<blockquote className="text-base italic font-semibold text-gray-900 ">
						<svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
							<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
						</svg>
						<p className="mb-4 md:mb-8">“Los juguetes de madera no solo son hermosos, sino también versátiles. Fomentan habilidades motoras, imaginación y coordinación. Además, la madera tiene marcas del tiempo en su piel y un aroma acogedor. ¿Por qué elegir juguetes de plástico cuando puedes tener la calidez y la autenticidad de la madera?”</p>
					</blockquote>
				</div>
				<div className="lg:w-1/2 w-full pl-0 lg:pl-20">
					<Image
						src={creativas_10}
						alt="Imagen"
						width={1110}
						height={340}
						className="object-cover object-center rounded-2xl "
						loading={'eager'}
					/>
				</div>
			</div>
		</section>
		{/* Sección 4 */}
		<section >
			<div className="mx-auto flex px-8 py-4 lg:py-0 lg:flex-row flex-col items-center ">
				<div className=" lg:w-1/2 w-full pl-0 lg:pl-20 z-10 ">
					<h1 className="text-xl mb-4 font-medium italic">Donde la diversión se encuentra con la naturaleza</h1>
					<blockquote className="text-base italic font-semibold text-gray-900 ">
						<svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
							<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
						</svg>
						<p className="mb-4 md:mb-8">“Los juguetes de madera tienen una rica historia que se remonta a siglos atrás. Antes de la era del plástico, los niños jugaban con tesoros tallados a mano: muñecas, trenes, animales y rompecabezas. Estos juguetes eran apreciados por su simplicidad y conexión con la naturaleza. Hoy en día, los juguetes de madera siguen siendo una elección consciente para padres y educadores que valoran la calidad y la sostenibilidad”</p>
					</blockquote>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-8 md:mb-0 lg:order-first">
					<Image
						src={creativas_7}
						alt="Imagen"
						width={1110}
						height={340}
						className="object-cover object-center rounded-2xl "
						loading={'eager'}
					/>
				</div>
			</div>
		</section>	
	</div>
  );
}
