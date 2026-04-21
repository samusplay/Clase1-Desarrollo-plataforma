import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import toast from "react-hot-toast"; // <-- 1. Importamos el toast
import { type ProductoRetro } from "../types/combo";
import CajaMisteriosa from "./CajaMisteriosa";
import ProductoArrastrable from "./ProductoArrastrable";

// Nuestro catálogo inicial de la tienda retro
const PRODUCTOS_INICIALES: ProductoRetro[] = [
  { id: "p1", nombre: "Mando Bluetooth Pro", precio: 25, imagenIcono: "🎮" },
  { id: "p2", nombre: "Pack Sonidos 8-bit", precio: 10, imagenIcono: "👾" },
  { id: "p3", nombre: "Guía Setup Emuladores", precio: 5, imagenIcono: "📘" },
  { id: "p4", nombre: "Funda para Consola", precio: 15, imagenIcono: "🎒" },
];

export default function ArmadorCombos() {
  // Estados: Qué hay en la tienda y qué hay en la caja
  const [disponibles, setDisponibles] = useState<ProductoRetro[]>(PRODUCTOS_INICIALES);
  const [enCaja, setEnCaja] = useState<ProductoRetro[]>([]);

  // ¡LA MAGIA OCURRE AQUÍ! Esta función se dispara al soltar el ratón
  const manejarFinDeArrastre = (event: DragEndEvent) => {
    const { active, over } = event;

    // 1. Si no lo soltó sobre nada válido, cancelamos.
    // 2. Si la caja ya tiene 3 artículos, no dejamos meter más.
    if (!over || enCaja.length >= 3) return;

    // Si lo soltó específicamente sobre el ID de nuestra caja...
    if (over.id === "caja-misteriosa") {
      // Buscamos cuál fue el producto que agarró usando el active.id
      const productoArrastrado = disponibles.find((p) => p.id === active.id);

      if (productoArrastrado) {
        // Lo quitamos de la lista de disponibles
        setDisponibles((prev) => prev.filter((p) => p.id !== active.id));
        // Lo metemos en el arreglo de la caja
        setEnCaja((prev) => [...prev, productoArrastrado]);
      }
    }
  };

  // Cálculo de precios en tiempo real
  const subtotal = enCaja.reduce((suma, prod) => suma + prod.precio, 0);
  const tieneDescuento = enCaja.length === 3;
  const totalFinal = tieneDescuento ? subtotal * 0.85 : subtotal;

  // <-- 2. Creamos la función para el botón de compra
  const manejarCompra = () => {
    toast.success(`¡Combo Retro comprado con éxito por $${totalFinal.toFixed(2)}!`, {
      duration: 4000,
      style: {
        background: '#312e81', // Usamos el color índigo oscuro que te gusta
        color: '#fff',
        borderRadius: '10px',
        border: '2px solid #1e1b4b', // Borde para mantener el estilo neo-brutalista
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#312e81',
      },
    });

    // Reiniciamos el estado para que el cliente pueda armar otro combo
    setEnCaja([]);
    setDisponibles(PRODUCTOS_INICIALES);
  };

  return (
    // DndContext envuelve todo para que los componentes puedan "hablar" entre ellos
    <DndContext onDragEnd={manejarFinDeArrastre}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mt-10 items-start">
        
        {/* COLUMNA IZQUIERDA: ESTANTERÍA DE PRODUCTOS */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Catálogo de Accesorios</h2>
            <p className="text-sm text-gray-500 mt-1">Arrastra tus favoritos a la caja.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {disponibles.length > 0 ? (
              disponibles.map((prod) => (
                <ProductoArrastrable key={prod.id} producto={prod} />
              ))
            ) : (
              <p className="text-sm text-gray-400 italic col-span-2">No hay más productos disponibles.</p>
            )}
          </div>
        </div>

        {/* COLUMNA DERECHA: LA CAJA Y EL TICKET */}
        <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200">
          
          {/* El componente Droppable */}
          <CajaMisteriosa productosEnCaja={enCaja} />

          {/* Resumen del Combo */}
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Resumen de Compra</h4>
            
            <div className="space-y-2 mb-4">
              {enCaja.map((p) => (
                <div key={p.id} className="flex justify-between text-sm font-bold text-gray-700">
                  <span>{p.imagenIcono} {p.nombre}</span>
                  <span>${p.precio}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {tieneDescuento && (
                <div className="flex justify-between text-sm text-green-600 font-bold">
                  <span>Descuento Combo (15%)</span>
                  <span>-${(subtotal * 0.15).toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between text-xl font-black text-gray-900 pt-2">
                <span>Total</span>
                <span>${totalFinal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={manejarCompra} // <-- 3. Asignamos la función al botón
              disabled={enCaja.length === 0}
              className="w-full mt-6 bg-indigo-600 disabled:bg-gray-300 text-white font-black py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:shadow-none active:translate-y-1 uppercase tracking-widest text-sm"
            >
              Comprar Ahora
            </button>
          </div>
        </div>

      </div>
    </DndContext>
  );
}