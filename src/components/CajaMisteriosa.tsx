
import { useDroppable } from "@dnd-kit/core";
import { type ProductoRetro } from "../types/combo";

interface Props {
  productosEnCaja: ProductoRetro[];
}

export default function CajaMisteriosa({ productosEnCaja }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "caja-misteriosa", // ID único obligatorio
  });

  const estaLlena = productosEnCaja.length >= 3;
  const faltantes = 3 - productosEnCaja.length;

  return (
    <div
      ref={setNodeRef}
      className={`w-full max-w-md mx-auto h-64 border-4 border-dashed rounded-2xl flex flex-col items-center justify-center p-6 transition-all duration-300 ${
        estaLlena
          ? "border-green-500 bg-green-50 shadow-[8px_8px_0px_0px_rgba(34,197,94,1)]"
          : isOver
          ? "border-indigo-500 bg-indigo-50 shadow-[8px_8px_0px_0px_rgba(99,102,241,1)] scale-105"
          : "border-gray-800 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      }`}
    >
      {estaLlena ? (
        <div className="text-center animate-bounce">
          {/* Un alien/monstruito retro para celebrar */}
          <div className="text-6xl mb-2">👾</div>
          <h3 className="text-2xl font-black text-green-600 uppercase tracking-widest">
            ¡Combo Listo!
          </h3>
          <p className="text-sm text-green-700 font-bold mt-1">
            15% de Descuento Activado
          </p>
        </div>
      ) : (
        <div className="text-center">
          <div className={`text-6xl mb-2 transition-opacity ${isOver ? 'opacity-100' : 'opacity-40'}`}>
            📦
          </div>
          <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
            Arma tu Pack Retro
          </h3>
          <p className="text-sm text-gray-600 mt-2 font-bold">
            Arrastra <span className="text-indigo-600 text-lg font-black">{faltantes}</span> artículo{faltantes !== 1 ? 's' : ''} más aquí
          </p>
        </div>
      )}
    </div>
  );
}