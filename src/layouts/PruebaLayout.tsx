import { Outlet } from "react-router-dom";

export default function PruebaLayout() {
  return (
    // Contenedor principal: ocupa al menos toda la pantalla (min-h-screen) y usa flexbox en columna
    <div className="min-h-screen flex flex-col bg-slate-100 font-sans text-slate-800">
      
      {/* Encabezado (Header) */}
      <header className="bg-indigo-600 text-white shadow-md py-4 px-6 md:px-12 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          Mis Ejercicios React <span className="text-indigo-200">Pro</span> 🚀
        </h1>
        <nav>
          {/* Aquí podrías poner enlaces de navegación a futuro */}
          <span className="text-sm font-medium bg-indigo-700 py-1 px-3 rounded-full">
            TypeScript + Tailwind
          </span>
        </nav>
      </header>

      {/* Contenido Principal (Main) */}
      {/* flex-grow hace que esta sección empuje el footer hacia abajo si hay poco contenido */}
      <main className="flex-grow container mx-auto p-6 md:p-10 flex flex-col items-center">
        
        {/* Una tarjeta blanca bonita para contener el ejercicio activo */}
        <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-8 border border-slate-200">
          
          {/* AQUÍ ES DONDE APARECE LA MAGIA DEL ROUTER */}
          <Outlet />

        </div>
      </main>

      {/* Pie de página (Footer) */}
      <footer className="bg-slate-800 text-slate-400 text-center py-4 text-sm mt-auto">
        <p>Desarrollado en modo Pro 🔥</p>
      </footer>

    </div>
  );
}