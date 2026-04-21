import { Toaster } from "react-hot-toast";
import EncuestaForm from "../components/EncuestaForm";

export default function HackathonView() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      
      {/* Contenedor principal para el formulario */}
      <div className="w-full">
        <EncuestaForm />
      </div>

      {/* El Toaster debe estar presente en la vista para que 
        toast.success() del componente pueda dibujar la alerta. 
      */}
      <Toaster 
        position="top-right" 
        reverseOrder={false} 
      />
      
    </div>
  );
}