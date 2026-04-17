import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { DATA_LOCALIDADES, type ReservaTicket } from "../types/reserva";


export default function ReservaForm() {
    //cofnigurar react hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ReservaTicket>()

    //estado para manejar logica de ubicacion
    const [paisSeleccionado, setPaisSeleccionado] = useState<string>("")

    //funcion para enviar usando la herramienta de hook-form
    const alEnviar: SubmitHandler<ReservaTicket> = (data) => {
        console.log("Datos de la reserva:", data);
        alert(`¡Reserva exitosa para ${data.nombre}! Revisa tu correo ${data.email}`);
        reset();
        setPaisSeleccionado("");
    };
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reserva de Entradas</h2>

            <form onSubmit={handleSubmit(alEnviar)} className="space-y-5">

                {/* Nombre y Email en una fila */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre Completo</label>
                        <input
                            {...register("nombre", { required: "El nombre es obligatorio" })}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Ej. Juan Pérez"
                        />
                        {errors.nombre && <span className="text-red-500 text-xs">{errors.nombre.message}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Correo Electrónico</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "El email es obligatorio",
                                pattern: { value: /^\S+@\S+$/i, message: "Email no válido" }
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="correo@ejemplo.com"
                        />
                    </div>
                </div>

                {/* Teléfono */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono</label>
                    <input
                        type="tel"
                        {...register("telefono", { required: "Teléfono requerido" })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="+57 300..."
                    />
                </div>

                {/* Lógica de Menús Desplegables con useState */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">País</label>
                        <select
                            {...register("pais", { required: true })}
                            onChange={(e) => setPaisSeleccionado(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">Seleccione país</option>
                            {Object.keys(DATA_LOCALIDADES).map(pais => (
                                <option key={pais} value={pais}>{pais}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Departamento / Estado</label>
                        <select
                            {...register("departamento", { required: true })}
                            disabled={!paisSeleccionado}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
                        >
                            <option value="">Seleccione lugar</option>
                            {paisSeleccionado && DATA_LOCALIDADES[paisSeleccionado].map(depto => (
                                <option key={depto} value={depto}>{depto}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Área de Texto */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Requerimientos Especiales</label>
                    <textarea
                        {...register("comentarios")}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="¿Alguna necesidad de accesibilidad o preferencia?"
                    />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        {...register("terminos", { required: true })}
                        className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label className="text-sm text-gray-600">
                        Acepto los términos y condiciones del evento y la política de tratamiento de datos.
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all shadow-md active:scale-95"
                >
                    Confirmar Reserva
                </button>
            </form>
        </div>
    );


}