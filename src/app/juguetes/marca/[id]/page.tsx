import { getArticulosByMarca } from "@/actions/articulos.actions";
import { getAllMarcas } from "@/actions/marcas.actions";
import { CardArticulo } from "@/components/CardArticulo";

export async function generateStaticParams() {
    const marcas = await getAllMarcas();
    return marcas.map(marca => ({ id: marca.id } ));
}

const getArticulos = async (id: string) => { 
    return await getArticulosByMarca(id);
}

interface Props {
    params: Promise<{
      id: string
    }>
  }

export default async function ArticuloByMarcaPage({ params }: Props) {
    const id =  (await params).id;
    return (
        <div className="flex flex-1 overflow-y-auto mb-0 mt-2  md:mb-2 justify-center">
            {/* Sección principal */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-4 md:px-10 lg:px-40 gap-10 ">
            {
                (await getArticulos(id)).map(articulo => (
                    <CardArticulo key={articulo.id} articulo={articulo} />
                ))

            }
      </div>
</div>
    );
}