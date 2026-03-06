import Constante from "../bases/constante";
import Buscadores from "../components/Buscadores";
import GeneradorAleatorio from "../components/GeneradorAleatorio";

//pasamos  props a componente padre
export default function BasesView() {
    
    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
                    Ejercicio 1
                </h2>
                <Constante firstName="Samuel" secondName="Esteban" />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
                    Ejericio 2
                </h2>
                <GeneradorAleatorio />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
                    Ejercicio 3:Buscadores
                </h2>
                <Buscadores />

            </div>


        </div>

    )
}