import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import type { EncuentaHackathon } from "../types/encuesta";
import HackathonCard from "./HackathonCard";


const LENGUAJES_DISPONIBLES = ["C", "C++", "Java", "Python", "TypeScript"];
const LIMITE_CARACTERES = 100; // Límite para el textarea

export default function EncuestaForm() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<EncuentaHackathon>({
        defaultValues: {
            dia: "",
            lenguajes: [],
            modalidad: "",
            expectativas: ""
        }
    });

    const valoresActuales = watch();

    // Cálculo matemático para el requisito 1.1
    const caracteresIngresados = valoresActuales.expectativas?.length || 0;
    const caracteresRestantes = LIMITE_CARACTERES - caracteresIngresados;

    const alEnviar: SubmitHandler<EncuentaHackathon> = (data) => {
        toast.success(`¡Registro exitoso!`, {
            duration: 4000,
            style: { background: '#312e81', color: '#fff', borderRadius: '10px' },
            iconTheme: { primary: '#fff', secondary: '#312e81' },
        });
        reset();
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full max-w-5xl mx-auto mt-6">

            {/* COLUMNA IZQUIERDA: FORMULARIO COMPACTO */}
            <div className="w-full">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-black text-indigo-600 tracking-tight">Registro Hackathon</h2>
                    <p className="text-gray-500 mt-1 text-xs">Completa el formulario para asegurar tu cupo.</p>
                </div>

                <form onSubmit={handleSubmit(alEnviar)} className="space-y-4">

                    {/* FILA 1: Día y Modalidad en la misma línea para ahorrar espacio vertical */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* REQUISITO 1.2: Menú de selección */}
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                                ¿Qué día prefieres?
                            </label>
                            <select
                                {...register("dia", { required: "Selecciona un día" })}
                                className={`w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-gray-50 focus:bg-white cursor-pointer text-sm ${errors.dia ? 'border-red-500' : 'border-gray-200'}`}
                            >
                                <option value="">Selecciona...</option>
                                <option value="Sábado 18">Sábado 18</option>
                                <option value="Domingo 19">Domingo 19</option>
                            </select>
                            {errors.dia && <span className="text-red-500 text-[10px] font-bold mt-1 inline-block">{errors.dia.message}</span>}
                        </div>

                        {/* REQUISITO 1.3: Funcionalidad con Radio Button */}
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                                Modalidad
                            </label>
                            <div className="flex gap-2">
                                <label className="flex items-center gap-1 cursor-pointer p-2.5 border border-gray-200 rounded-lg has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50 w-full justify-center transition-all">
                                    <input type="radio" value="Presencial" {...register("modalidad", { required: "Elige modalidad" })} className="w-3.5 h-3.5 text-indigo-600" />
                                    <span className="text-xs font-semibold">Presencial</span>
                                </label>
                                <label className="flex items-center gap-1 cursor-pointer p-2.5 border border-gray-200 rounded-lg has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50 w-full justify-center transition-all">
                                    <input type="radio" value="Remoto" {...register("modalidad", { required: "Elige modalidad" })} className="w-3.5 h-3.5 text-indigo-600" />
                                    <span className="text-xs font-semibold">Remoto</span>
                                </label>
                            </div>
                            {errors.modalidad && <span className="text-red-500 text-[10px] font-bold mt-1 inline-block">{errors.modalidad.message}</span>}
                        </div>
                    </div>

                    {/* Checkboxes de lenguajes (Botones más pequeños) */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Lenguajes que dominas</label>
                        <div className="grid grid-cols-3 gap-2">
                            {LENGUAJES_DISPONIBLES.map((lenguaje) => (
                                <label key={lenguaje} className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-700">
                                    <input type="checkbox" value={lenguaje} {...register("lenguajes", { required: "Elige al menos uno" })} className="w-3.5 h-3.5 text-indigo-600 accent-indigo-600" />
                                    <span className="text-xs font-semibold text-gray-700">{lenguaje}</span>
                                </label>
                            ))}
                        </div>
                        {errors.lenguajes && <span className="text-red-500 text-[10px] font-bold mt-1 inline-block">{errors.lenguajes.message}</span>}
                    </div>

                    {/* REQUISITO 1.1: Área de texto con contador doble (Menos altura) */}
                    <div>
                        <div className="flex justify-between items-end mb-1">
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                                Expectativas del evento
                            </label>
                            <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                                {caracteresIngresados}/{caracteresRestantes}
                            </span>
                        </div>
                        <textarea
                            {...register("expectativas", { maxLength: LIMITE_CARACTERES })}
                            maxLength={LIMITE_CARACTERES}
                            rows={2} /* Reducido de 3 a 2 para ahorrar altura */
                            placeholder="¿Qué esperas aprender o lograr?"
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none bg-gray-50 focus:bg-white text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-black py-3 rounded-lg hover:bg-indigo-700 transition-all shadow-md active:scale-95 uppercase tracking-widest text-xs mt-2"
                    >
                        Confirmar Registro
                    </button>
                </form>
            </div>

            {/* COLUMNA DERECHA: LA CREDENCIAL DE HACKATHON */}
            <div className="flex flex-col items-center lg:sticky lg:top-10">
                <h3 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">
                    Vista Previa de tu Credencial
                </h3>
                <HackathonCard datos={valoresActuales} />
            </div>

        </div>
    );
}