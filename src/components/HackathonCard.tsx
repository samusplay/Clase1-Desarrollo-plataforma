interface Props {
  datos: any;
}

export default function HackathonCard({ datos }: Props) {
  // Colores dinámicos según la modalidad
  const esPresencial = datos.modalidad === "Presencial";

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative group transition-all duration-500 hover:-translate-y-2">
      {/* Decoración Superior */}
      <div className={`h-24 ${esPresencial ? 'bg-indigo-600' : 'bg-purple-600'} p-6 transition-colors duration-500`}>
        <div className="flex justify-between items-start">
          <span className="text-white/20 font-black text-4xl">HACK</span>
          <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
            <p className="text-[10px] text-white font-bold tracking-widest uppercase">
              {datos.modalidad || "---"}
            </p>
          </div>
        </div>
      </div>

      {/* Cuerpo de la Credencial */}
      <div className="px-8 pb-8 pt-12 relative">
        {/* "Foto" de Perfil (Placeholder con Inicial) */}
        <div className="absolute -top-10 left-8 w-20 h-20 bg-gray-100 rounded-2xl border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
          <div className="text-2xl font-black text-gray-400 uppercase">
             {datos.dia ? datos.dia.charAt(0) : "?"}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-black text-gray-800 uppercase leading-none">
              Aspiring Dev
            </h3>
            <p className="text-xs font-bold text-indigo-500 mt-1">HACKATHON PARTICIPANT</p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-[9px] text-gray-400 uppercase font-black">Disponibilidad</p>
              <p className="text-sm font-bold text-gray-700">{datos.dia || "Por definir"}</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-400 uppercase font-black">ID Registro</p>
              <p className="text-sm font-bold text-gray-700 font-mono">#2026-X</p>
            </div>
          </div>

          {/* Stack Tecnológico con Pills */}
          <div>
            <p className="text-[9px] text-gray-400 uppercase font-black mb-2">Stack Tecnológico</p>
            <div className="flex flex-wrap gap-2">
              {datos.lenguajes && datos.lenguajes.length > 0 ? (
                datos.lenguajes.map((l: string) => (
                  <span key={l} className="px-2 py-1 bg-gray-100 text-[10px] font-bold text-gray-600 rounded-md border border-gray-200">
                    {l}
                  </span>
                ))
              ) : (
                <span className="text-[10px] text-gray-400 italic">No seleccionado</span>
              )}
            </div>
          </div>

          {/* Mini resumen de expectativas (Recortado) */}
          <div className="pt-2">
             <p className="text-[9px] text-gray-400 uppercase font-black">Expectativas</p>
             <p className="text-[11px] text-gray-600 line-clamp-2 italic">
               "{datos.expectativas || "Sin comentarios..."}"
             </p>
          </div>
        </div>
      </div>

      {/* Footer del Badge */}
      <div className="bg-gray-50 px-8 py-3 border-t border-gray-100 flex justify-center">
        <div className="h-6 w-full bg-[url('https://www.creativethoughts.co.in/images/barcode.png')] bg-repeat-x bg-contain opacity-30"></div>
      </div>
    </div>
  );
}