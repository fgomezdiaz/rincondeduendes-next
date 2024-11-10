import { NombreCategoriaSelecccionada } from "@/components/NombreCategoriaSelecccionada";
import { NombreMarcaSelecccionada } from "@/components/NombreMarcaSelecccionada";
import { TabJuguetesSelect } from "@/components/TabJuguetesSelect";


export default async function JuguetesLayout({children}: {children: React.ReactNode}) {

    
    return (
        <div className="flex flex-col overflow-auto">
            <div className="mb-16">
                <TabJuguetesSelect children1={<NombreMarcaSelecccionada />} children2={<NombreCategoriaSelecccionada />} >
                </TabJuguetesSelect>
            </div>
    
            {children}
        </div>
    );
}