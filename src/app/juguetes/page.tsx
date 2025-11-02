import { getAllMarcas } from "@/actions/marcas.actions";
import { CardMarca } from "@/components/CardMarca";

/**
 * Función para obtener todas las marcas
 * Usa 'use cache' implícito a través de getAllMarcas
 * La página se genera estáticamente en build time
 */
const getMarcas = async() => {
    return await getAllMarcas();
}

/**
 * Página estática que muestra todas las marcas
 * - Se cachea en build time con 'use cache' (ya implementado en getAllMarcas)
 * - No necesita Suspense porque los datos son estáticos
 * - Se regenera solo cuando cambias los datos y haces rebuild
 */
export default async function JuguetesPage() {
    const marcas = await getMarcas();
    
    return (
        <div className="flex flex-1 overflow-y-auto mb-0 mt-2  md:mb-2 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-10 lg:px-40 gap-4">

                {marcas.map((marca) => (
                    <CardMarca key={marca.id} marca={marca} />
                ))}
            </div>

        </div>
    );
}