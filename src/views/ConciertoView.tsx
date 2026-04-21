import { Toaster } from "react-hot-toast";
import ReservaForm from "../components/ReservaForm";

export default function ConciertoView() {
  return (
    <div className="w-full max-w-5xl mx-auto"> 
      {/* Cambié el max-w-md (que venía del layout) por max-w-5xl. 
         Esto le da "aire" a las dos columnas. 
      */}
      
      <header className="text-center mb-10">
        <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">
          Tour 2026
        </span>
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">
          Pase de Acceso
        </h2>
      </header>

      <main>
        <ReservaForm />
      </main>

      {/* Este componente debe estar aquí para que las notificaciones funcionen */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}