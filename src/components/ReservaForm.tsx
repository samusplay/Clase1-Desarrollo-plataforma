import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { DATA_LOCALIDADES, type ReservaTicket } from "../types/reserva";

export default function ReservaForm() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<ReservaTicket>();

    // watch() escucha los cambios en tiempo real para el Ticket Card
    const valoresActuales = watch();
    const [paisSeleccionado, setPaisSeleccionado] = useState<string>("");

    const alEnviar: SubmitHandler<ReservaTicket> = (data) => {
        console.log("Datos de la reserva:", data);
        toast.success(`¡Reserva confirmada, ${data.nombre}!`, {
            duration: 4000,
            style: {
                background: '#312e81',
                color: '#fff',
                borderRadius: '10px',
            },
            iconTheme: {
                primary: '#fff',
                secondary: '#312e81',
            },
        });
        reset();
        setPaisSeleccionado("");
    };

    // Función interna para renderizar el Ticket (Diseño visual)
    const renderTicketPreview = () => {
        const colores: Record<string, string> = {
            General: "bg-slate-700",
            VIP: "bg-amber-500",
            Platinum: "bg-indigo-600"
        };

        return (
    <div className="sticky top-10 w-full flex flex-col items-center">
      <h3 className="text-xs font-bold text-gray-400 uppercase mb-6 tracking-[0.3em]">
        Tu Ticket Digital
      </h3>
      
      {/* Contenedor del Ticket Horizontal */}
      <div className="flex w-full max-w-md h-48 shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105">
        
        {/* PARTE IZQUIERDA: Información Principal */}
        <div className="flex-2 bg-white p-6 relative flex flex-col justify-between">
          {/* Círculos para simular el troquelado lateral */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-50 rounded-full"></div>
          
          <div>
            <p className={`text-[10px] font-black uppercase tracking-widest ${valoresActuales.tipoTicket === 'VIP' ? 'text-amber-600' : 'text-indigo-600'}`}>
              {valoresActuales.tipoTicket || "Pase de Acceso"}
            </p>
            <h3 className="text-xl font-black text-gray-900 uppercase truncate mt-1">
              {valoresActuales.nombre || "ASISTENTE"}
            </h3>
          </div>

          <div className="flex justify-between items-end border-t border-gray-100 pt-4">
            <div>
              <p className="text-[8px] text-gray-400 uppercase font-bold">Ubicación</p>
              <p className="text-xs font-bold text-gray-700">
                {valoresActuales.pais ? `${valoresActuales.pais}, ${valoresActuales.departamento}` : "---"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[8px] text-gray-400 uppercase font-bold">Fecha del Evento</p>
              <p className="text-xs font-bold text-gray-700">ABR 16, 2026</p>
            </div>
          </div>
        </div>

        {/* LÍNEA DIVISORIA (TROQUELADO) */}
        <div className="w-0 border-l-2 border-dashed border-gray-200 relative">
           <div className="absolute -top-3 -left-1.75 w-3 h-6 bg-slate-50 rounded-b-full"></div>
           <div className="absolute -bottom-3 -left-1.75 w-3 h-6 bg-slate-50 rounded-t-full"></div>
        </div>

        {/* PARTE DERECHA: La Colilla (Stub) */}
        <div className={`${colores[valoresActuales.tipoTicket] || 'bg-slate-400'} flex-1 flex flex-col items-center justify-center p-4 text-white transition-colors duration-700`}>
          <div className="rotate-90 origin-center w-32 flex flex-col items-center">
            <div className="h-8 w-full bg-[url('https://www.creativethoughts.co.in/images/barcode.png')] bg-repeat-x bg-contain brightness-0 invert opacity-80"></div>
            <p className="text-[8px] font-mono mt-1 tracking-tighter">
              {valoresActuales.nombre ? valoresActuales.nombre.slice(0,3).toUpperCase() : "TKT"}-2026
            </p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-gray-400 text-[10px] italic">
        * Este es un comprobante dinámico generado en tiempo real.
      </p>
    </div>
  );
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* COLUMNA IZQUIERDA: FORMULARIO */}
            <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-2xl font-black text-gray-800">Finaliza tu Reserva</h2>
                    <p className="text-gray-500 text-sm">Completa los campos para generar tu ticket dinámico.</p>
                </div>

                <form onSubmit={handleSubmit(alEnviar)} className="space-y-5">
                    {/* Nombre y Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre Completo</label>
                            <input
                                {...register("nombre", { required: "El nombre es obligatorio" })}
                                className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${errors.nombre ? 'border-red-500' : 'border-gray-200'}`}
                                placeholder="Ej. Juan Pérez"
                            />
                            {errors.nombre && <span className="text-red-500 text-[10px] font-bold uppercase">{errors.nombre.message}</span>}
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Correo</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email obligatorio" })}
                                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="correo@ejemplo.com"
                            />
                        </div>
                    </div>

                    {/* RADIO BUTTONS: TIPO DE TICKET */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-3">Selecciona Experiencia</label>
                        <div className="grid grid-cols-3 gap-3">
                            {["General", "VIP", "Platinum"].map((tipo) => (
                                <label key={tipo} className="relative flex items-center justify-center p-3 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all has-checked:border-indigo-600 has-checked:bg-indigo-50">
                                    <input
                                        {...register("tipoTicket", { required: "Selecciona un tipo" })}
                                        type="radio"
                                        value={tipo}
                                        className="sr-only" // Ocultamos el radio original por estética
                                    />
                                    <span className="text-xs font-bold text-gray-700">{tipo}</span>
                                </label>
                            ))}
                        </div>
                        {errors.tipoTicket && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">Debes elegir una opción</p>}
                    </div>

                    {/* País y Departamento */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">País</label>
                            <select
                                {...register("pais", { required: true })}
                                onChange={(e) => setPaisSeleccionado(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-white text-sm outline-none"
                            >
                                <option value="">País</option>
                                {Object.keys(DATA_LOCALIDADES).map(pais => (
                                    <option key={pais} value={pais}>{pais}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Ciudad/Estado</label>
                            <select
                                {...register("departamento", { required: true })}
                                disabled={!paisSeleccionado}
                                className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-white text-sm outline-none disabled:bg-gray-50 disabled:text-gray-300"
                            >
                                <option value="">Ubicación</option>
                                {paisSeleccionado && DATA_LOCALIDADES[paisSeleccionado].map(depto => (
                                    <option key={depto} value={depto}>{depto}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Comentarios */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Requerimientos</label>
                        <textarea
                            {...register("comentarios")}
                            rows={2}
                            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none text-sm"
                            placeholder="¿Alguna necesidad especial?"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-black py-4 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] uppercase tracking-widest text-sm"
                    >
                        Confirmar Mi Reserva
                    </button>
                </form>
            </div>

            {/* COLUMNA DERECHA: TICKET PREVIEW */}
            <div className="flex justify-center items-center lg:pt-16">
                {renderTicketPreview()}
            </div>

        </div>
    );
}