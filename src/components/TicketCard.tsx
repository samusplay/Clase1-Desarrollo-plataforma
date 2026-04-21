
interface Props {
  datos: any; // Aquí recibiremos lo que 'watch' nos dé
}

export default function TicketCard({ datos }: Props) {
  // Definimos colores según el tipo de ticket
  const colores: any = {
    General: "bg-gray-800",
    VIP: "bg-amber-500",
    Platinum: "bg-indigo-600"
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border-2 border-dashed border-gray-200">
      <div className={`${colores[datos.tipoTicket] || 'bg-slate-700'} p-4 text-white text-center`}>
        <p className="text-xs uppercase tracking-widest font-bold">Ticket de Acceso</p>
        <h3 className="text-xl font-black">{datos.tipoTicket || "SELECCIONE TIPO"}</h3>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <p className="text-[10px] text-gray-400 uppercase font-bold">Asistente</p>
          <p className="text-lg font-bold text-gray-800 uppercase leading-none">{datos.nombre || "--- ---"}</p>
        </div>
        
        <div className="flex justify-between">
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold">Ubicación</p>
            <p className="text-sm font-semibold">{datos.pais || "---"}, {datos.departamento || "---"}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-400 uppercase font-bold">Fecha</p>
            <p className="text-sm font-semibold">16 ABR 2026</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-center">
          {/* Un código de barras de mentira con Tailwind */}
          <div className="h-12 w-full bg-[url('https://www.creativethoughts.co.in/images/barcode.png')] bg-repeat-x bg-contain opacity-70"></div>
        </div>
      </div>
    </div>
  );
}