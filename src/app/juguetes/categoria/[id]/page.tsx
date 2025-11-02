
import { getArticulosByCategoria } from "@/actions/categorias.actions";
import { CardArticulo } from "@/components/CardArticulo";
import { TCategoria } from "@/interfaces/categorias.interface";
import { Suspense } from "react";

interface Props {
    params: Promise<{
      id: string
    }>
  }

async function ArticulosList({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const articulos = await getArticulosByCategoria(id as TCategoria);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-4 md:px-10 lg:px-40 gap-10">
            {articulos.map(articulo => (
                <CardArticulo key={articulo.id} articulo={articulo} />
            ))}
        </div>
    );
}

export default function ArticuloByCategoriaPage({ params }: Props) {
    return (
        <div className="flex flex-1 overflow-y-auto mb-0 mt-2  md:mb-2 ">
            {/* Sección principal */}
            <Suspense fallback={
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-4 md:px-10 lg:px-40 gap-10">
                    <div className="col-span-full text-center py-10">Cargando artículos...</div>
                </div>
            }>
                <ArticulosList params={params} />
            </Suspense>
        </div>
    );
}