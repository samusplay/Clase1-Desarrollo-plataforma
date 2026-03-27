
import { useState } from "react";

export default function NumeroAleatorio() {
    //llamamos al hook valor inicial 0
    const [numero, setNumero] = useState([0,0,0,0,0])

    const generar = () => {
        // 2. Generamos el nuevo número
        const nuevoValor = Math.trunc(Math.random() * 10);
        
        // 3. ACTUALIZACIÓN PRO: Usamos el Spread Operator (...) para 
        // mantener lo que ya había y agregar el nuevo valor al final
        setNumero([...numero, nuevoValor]);
    }
   

   return (
        <div className="flex flex-col items-center gap-4 py-4">
            <div className="text-lg font-medium text-gray-700">
                Números Generados: 
                <div className="flex flex-wrap gap-2 mt-2">
                    {/* 4. RECORRIDO CON MAP: Usamos un span para que no 
                        se rompa el diseño y agregamos la 'key' */}
                    {numero.map((num, index) => (
                        <span key={index} className="text-3xl font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                            {num}
                        </span>
                    ))}
                </div>
            </div>

            <button 
                onClick={generar}
                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 active:scale-95 mt-4"
            >
                Generar Número Aleatorio
            </button>
        </div>
    );
}