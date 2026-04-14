import { useState } from "react";
import Dado from "../components/Dado";

export default function ClaseView() {
    
    // AQUÍ ESTABA EL DETALLE: 'dados' con D
    const [dados, setDados] = useState<number[]>([1, 1, 1]);

    const reiniciar = () => {
        setDados([1, 1, 1]);
    };

    const lanzar = () => {
        const v1 = Math.trunc(Math.random() * 6) + 1;
        const v2 = Math.trunc(Math.random() * 6) + 1;
        const v3 = Math.trunc(Math.random() * 6) + 1;
        
        setDados([v1, v2, v3]);
    };

    // Lógica victoria
    const ganaste = dados[0] === dados[1] && dados[1] === dados[2];

    return (
        <div className="flex flex-col items-center gap-8 p-10 max-w-2xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-800">Juego de Dados</h1>

            <div className="flex gap-6 p-8 bg-gray-100 rounded-2xl border-2 border-gray-200 shadow-inner">
                <Dado valor={dados[0]} />
                <Dado valor={dados[1]} />
                <Dado valor={dados[2]} />
            </div>

            {ganaste && (
                <div className="bg-green-100 border-2 border-green-500 text-green-700 px-8 py-3 rounded-xl font-black text-2xl shadow-lg animate-bounce">
                    ¡Felicidades, Ganaste! 🎉
                </div>
            )}

            <div className="flex gap-4 mt-4">
                <button
                    onClick={reiniciar}
                    className="bg-gray-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-700 transition duration-200"
                >
                    Inicio
                </button>
                <button
                    onClick={lanzar}
                    className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                >
                    Lanzar
                </button>
            </div>
        </div>
    );
}