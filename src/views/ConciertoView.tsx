import ReservaForm from "../components/ReservaForm";

export default function ConciertoView() {
  return (
    <>
      {/* Encabezado específico del Concierto (más simple) */}
      <div className="text-center mb-6">
        <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">
          Tour 2026
        </span>
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Reserva tu Entrada
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Vive la mejor experiencia musical del año.
        </p>
      </div>

      {/* Solo el Formulario */}
      {/* IMPORTANTE: Si tu ReservaForm tiene su propio fondo blanco y sombra, 
          se va a ver doble. Mira el paso 2 abajo. */}
      <ReservaForm />
    </>
  );
}