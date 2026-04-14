import type { articulo } from "../types/articulo";


interface Props {
  articulos: articulo[];
}

export default function TablaArticulos({ articulos }: Props) {
  return (
    <div className="overflow-x-auto my-6 shadow-md rounded-lg">
      <table className="w-full text-left border-collapse font-sans">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-3 px-4 border-b-2 border-gray-200">Código</th>
            <th className="py-3 px-4 border-b-2 border-gray-200">Descripción</th>
            <th className="py-3 px-4 border-b-2 border-gray-200">Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((art) => (
            // Cambiamos art.codigo por art.id
            <tr key={art.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td className="py-3 px-4 text-gray-900 font-medium">#{art.id}</td>
              {/* Cambiamos art.descripcion por art.title */}
              <td className="py-3 px-4 text-gray-600">{art.title}</td>
              <td className="py-3 px-4 text-emerald-500 font-bold">${art.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}