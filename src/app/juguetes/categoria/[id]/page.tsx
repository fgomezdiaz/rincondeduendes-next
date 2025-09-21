
import { getArticulosByCategoria, getAllCategorias } from "@/actions/categorias.actions";
import { CardArticulo } from "@/components/CardArticulo";
import { TCategoria } from "@/interfaces/categorias.interface";

export const dynamic = 'force-static';
export const revalidate = 86400; // re-generate once a day

export async function generateStaticParams() {
    const categorias = await getAllCategorias();
    // Los paths se generan por nombre, ya que el filtro usa TCategoria (nombre)
    return categorias.map(categoria => ({ id: categoria.nombre } ));
}

const getArticulos = async (id: string) => { 
    return await getArticulosByCategoria(id as TCategoria);
}

interface Props {
    params: Promise<{
      id: string
    }>
  }

export default async function ArticuloByCategoriaPage({ params }: Props) {
    const id =  (await params).id;
    return (
        <div className="flex flex-1 overflow-y-auto mb-0 mt-2  md:mb-2 ">
            {/* Sección principal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-4 md:px-10 lg:px-40 gap-10">
            {
                (await getArticulos(id)).map(articulo => (
                    <CardArticulo key={articulo.id} articulo={articulo} />
                ))

            }
      </div>
</div>
    );
}