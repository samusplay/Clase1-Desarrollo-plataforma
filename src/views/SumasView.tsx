import { useState, type FormEvent } from "react";
import FormularioNumeros from "../components/FormularioNumeros";
import ListadoResultados from "../components/ListadoResultados2";
import type { Operation } from "../types/operations";

export default function SumasView() {
    // Estado para almacenar el arreglo de operaciones [cite: 54, 55]
    const [operaciones, setOperacion] = useState<Operation[]>([]);

    // Función lógica que se pasa al hijo [cite: 68, 163]
    const gestionarSuma = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // [cite: 69]

        const target = event.currentTarget;
        const v1 = parseInt((target.elements.namedItem("valor1") as HTMLInputElement).value, 10); // [cite: 70]
        const v2 = parseInt((target.elements.namedItem("valor2") as HTMLInputElement).value, 10); // [cite: 71]

        const nuevo: Operation = {
            resultado: v1 + v2, // [cite: 72]
            valor1: v1,
            valor2: v2
        };

        // Actualizamos el estado con el operador spread [cite: 79, 83]
        setOperacion([nuevo, ...operaciones]);
        target.reset(); // Limpia los campos [cite: 80, 81]
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Calculadora Pro</h2>

            {/* Inyectamos el componente de entrada y pasamos la función [cite: 143, 166] */}
            <FormularioNumeros onSumar={gestionarSuma} />

            {/* Inyectamos el componente de salida y pasamos los datos [cite: 65, 144, 168] */}
            <ListadoResultados resultados={operaciones} />
        </div>
    );
}