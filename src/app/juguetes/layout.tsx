import { NombreMarcaSelecccionada } from "@/components/NombreMarcaSelecccionada";
import { TabJuguetesSelect } from "@/components/TabJuguetesSelect";

export default function JuguetesLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col overflow-auto">
            <div className="mb-16">
                <TabJuguetesSelect>
                    <NombreMarcaSelecccionada />
                </TabJuguetesSelect>
            </div>
    
            {children}
        </div>
    );
}