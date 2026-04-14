// src/views/ProductsView.tsx
import { useState } from "react";
import TablaArticulos from "../components/TablaArticulos";
import type { articulo } from "../types/articulo";

export default function ProductsView() {
  const [articulos, setArticulos] = useState<articulo[]>([]);
  const [recuperado, setRecuperado] = useState(false);

  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(datos => {
    // Fíjate que aquí usamos datos.products en lugar de solo datos
    setArticulos(datos.products); 
    setRecuperado(true);
  })
  .catch(error => {
    console.error("Hubo un error con la petición:", error);
  });
  // Renderizado condicional: si no hay datos, mostramos el mensaje
  if (!recuperado) {
    return (
      <div className="p-10 text-center text-xl text-gray-500 font-semibold animate-pulse">
        Recuperando datos...
      </div>
    );
  }

  // Si ya tenemos los datos, pintamos la tabla
  return (
    <div className="p-6">
      <TablaArticulos articulos={articulos} />
    </div>
  );
}