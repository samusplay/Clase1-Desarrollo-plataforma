// src/components/ListadoResultados.tsx

import type { Operation } from "../types/operations";


interface Props {
  resultados: Operation[];
}

export default function ListadoResultados({ resultados }: Props) {
  return (
    <ul className="mt-6 space-y-2">
      {resultados.map((elemento, index) => (
        <li 
          key={index} 
          className="p-3 bg-white border border-gray-200 rounded shadow-sm text-gray-700 flex justify-between"
        >
          <span>La suma de <b>{elemento.valor1}</b> y <b>{elemento.valor2}</b> es:</span>
          <span className="font-mono font-bold text-blue-600">{elemento.resultado}</span>
        </li>
      ))}
    </ul>
  );
}