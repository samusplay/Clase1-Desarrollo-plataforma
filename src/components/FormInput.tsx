import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormDatos {
  nombre: string;
  edad: string;
  estudios: boolean;
}

export default function FormInput() {
  const [datos, setDatos] = useState<FormDatos>({
    nombre: "",
    edad: "",
    estudios: false,
  });

  const cambioNombre = (e: ChangeEvent<HTMLInputElement>) => {
    setDatos((valores) => ({
      ...valores,
      nombre: e.target.value,
    }));
  };

  const cambioEdad = (e: ChangeEvent<HTMLInputElement>) => {
    setDatos((valores) => ({
      ...valores,
      edad: e.target.value,
    }));
  };

  const cambioEstudio = (e: ChangeEvent<HTMLInputElement>) => {
    setDatos((valores) => ({
      ...valores,
      estudios: e.target.checked, 
    }));
  };

  // Aquí está la función que dispara tu "pop out" (alert) al hacer submit
  const procesar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Dato cargado: ${datos.nombre} - Edad: ${datos.edad} - ${datos.estudios ? 'Con estudios' : 'Sin estudios'}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <form onSubmit={procesar} className="space-y-4">
        
        {/* --- INICIO DEL CAMBIO --- */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-700">Ingrese nombre:</label>
            {/* Aquí inyectamos el contador que lee el estado en tiempo real */}
            <span className="text-xs text-gray-500 font-medium">
              {datos.nombre.length} caracteres
            </span>
          </div>
          <input
            type="text"
            value={datos.nombre}
            onChange={cambioNombre}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {/* --- FIN DEL CAMBIO --- */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ingrese edad:</label>
          <input
            type="number"
            value={datos.edad}
            onChange={cambioEdad}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={datos.estudios}
            onChange={cambioEstudio}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">¿Tiene estudios?</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}