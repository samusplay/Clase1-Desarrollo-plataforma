
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { type ProductoRetro } from "../types/combo";

interface Props {
  producto: ProductoRetro;
}

export default function ProductoArrastrable({ producto }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: producto.id,
    data: producto, // Pasamos los datos para saber qué estamos arrastrando
  });

  // Controla el movimiento visual siguiendo el cursor
  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1, // Efecto "fantasma" al levantarlo
    zIndex: isDragging ? 50 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      // Estilo retro/gamer con sombras sólidas (box-shadow dura)
      className="bg-white border-2 border-gray-900 p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-grab active:cursor-grabbing transition-all flex items-center gap-4 touch-none select-none"
    >
      <div className="text-4xl">{producto.imagenIcono}</div>
      <div>
        <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight">
          {producto.nombre}
        </h4>
        <p className="text-xs text-indigo-600 font-bold mt-1">
          ${producto.precio}
        </p>
      </div>
    </div>
  );
}