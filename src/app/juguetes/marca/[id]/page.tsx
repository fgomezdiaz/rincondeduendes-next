import { getArticulosByMarca } from "@/actions/articulos.actions";
import { getAllMarcas } from "@/actions/marcas.actions";
import { CardArticulo } from "@/components/CardArticulo";

interface Props {
    params: Promise<{
      id: string
    }>
}

/**
 * Genera todas las rutas estáticas en build time
 * Pre-genera una página HTML para cada marca
 */
export async function generateStaticParams() {
    const marcas = await getAllMarcas();
    
    return marcas.map((marca) => ({
        id: marca.id,
    }));
}

/**
 * Página estática que muestra artículos por marca
 * - Se cachea en build time con 'use cache' (en getArticulosByMarca)
 * - Todas las rutas se pregeneran con generateStaticParams
 * - No necesita Suspense porque los datos son estáticos
 * - Se regenera solo cuando cambias los datos y haces rebuild
 */
export default async function ArticuloByMarcaPage({ params }: Props) {
    const { id } = await params;
    const articulos = await getArticulosByMarca(id);
    
    return (
        <>
            <div className="flex flex-1 overflow-y-auto mb-0 mt-2  md:mb-2 justify-center">
                {/* Sección principal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-4 md:px-10 lg:px-40 gap-10 ">
                    {articulos.map(articulo => (
                        <CardArticulo key={articulo.id} articulo={articulo} />
                    ))}
                </div>
            </div>
        </>
    );
}