import type { FormEventHandler } from "react";


interface Props {
  // En lugar de (event: FormEvent...) => void, usamos esto:
  onSumar: FormEventHandler<HTMLFormElement>;
}

export default function FormularioNumeros({ onSumar }: Props) {
  return (
    // Tailwind para que se vea de 10
    <form onSubmit={onSumar} className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-600">Primer Valor</label>
        <input 
          type="number" 
          name="valor1" 
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required 
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-600">Segundo Valor</label>
        <input 
          type="number" 
          name="valor2" 
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required 
        />
      </div>
      <button 
        type="submit" 
        className="w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-all"
      >
        Sumar
      </button>
    </form>
  );
}