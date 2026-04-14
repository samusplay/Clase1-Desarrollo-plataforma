import { useState, type FormEvent } from "react";
import ListadoResultados, { type ResultadoSuma } from "./ListadoResultados";

export default function CalculadoraSumas() {
    // Estado para guardar la lista de operaciones
    const [operaciones, setOperaciones] = useState<ResultadoSuma[]>([]);

    const sumar = (event: FormEvent<HTMLFormElement>) => {
        // 1. Prevenir que la página se recargue
        event.preventDefault();

        // 2. Extraer los datos del formulario de forma segura (TypeScript-friendly)
        const formData = new FormData(event.currentTarget);
        
        // Convertimos a número. Si está vacío o no es número, usamos 0
        const v1 = parseInt(formData.get("valor1") as string, 10) || 0;
        const v2 = parseInt(formData.get("valor2") as string, 10) || 0;

        const suma = v1 + v2;

        // 3. Crear el nuevo objeto según la interfaz
        const nuevoResultado: ResultadoSuma = {
            valor1: v1,
            valor2: v2,
            resultado: suma
        };

        // 4. Actualizar el estado: ...operaciones mantiene lo anterior, nuevoResultado lo agrega
        // Según la captura del profe (image_78dce6.png), él pone el nuevo al FINAL: [...operaciones, nuevo]
        setOperaciones([...operaciones, nuevoResultado]);

        // Opcional: Limpiar el formulario después de sumar
        event.currentTarget.reset();
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Calculadora de Sumas</h2>
            
            <form onSubmit={sumar} className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ingrese primer valor:</label>
                    <input 
                        type="number" 
                        name="valor1" 
                        required
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ingrese segundo valor:</label>
                    <input 
                        type="number" 
                        name="valor2" 
                        required
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <button 
                    type="submit" 
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition mt-2 self-start"
                >
                    Sumar
                </button>
            </form>

            <div className="mt-6 border-t pt-4">
                <h3 className="font-semibold text-gray-700 mb-2">Historial de Operaciones:</h3>
                {/* INYECTAMOS EL HIJO AQUÍ pasándole el estado 'operaciones' */}
                <ListadoResultados resultados={operaciones} />
            </div>
        </div>
    );
}