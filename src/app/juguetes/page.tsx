import { getAllMarcas } from "@/actions/marcas.actions";
import { CardMarca } from "@/components/CardMarca";

// Static generation for fast loads
export const dynamic = 'force-static';
export const revalidate = 86400; // re-generate once a day


const getMarcas = async() => {
    return await getAllMarcas();
}

export default async function JuguetesPage() {
    return (
        <div className="flex flex-1 overflow-y-auto mb-0 mt-2  md:mb-2 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-10 lg:px-40 gap-4">

                {(await getMarcas()).map((marca) => (
                    <CardMarca key={marca.id} marca={marca} />
                ))}
            </div>

        </div>
    );
}