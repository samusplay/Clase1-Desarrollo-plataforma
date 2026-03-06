import { useState, type ChangeEvent, type FormEvent } from "react";

export default function RegisterView() {
    
    // 1. ESTADOS EN LA RAÍZ (Ya no existe la función Registro() envolviéndolos)
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState<boolean>(false);

    // 2. MANEJADOR DE CAMBIOS
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 3. VALIDACIONES CORREGIDAS
    const validate = () => {
    const newErrors: Record<string, string> = {};
        
        // 1. Validación del Nombre
        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio";
        }
        
        // 2. Validación del Email
        if (!formData.email.includes("@")) {
            newErrors.email = "El correo debe incluir un '@'";
        }
        
        const password = formData.password;
        
        if (!password) {
            newErrors.password = "La contraseña es obligatoria";
        } else if (password.length < 8) {
            newErrors.password = "Debe tener al menos 8 caracteres";
        } else if (!/[A-Z]/.test(password)) {
            newErrors.password = "Debe incluir al menos una letra mayúscula";
        } else if (!/[a-z]/.test(password)) {
            newErrors.password = "Debe incluir al menos una letra minúscula";
        } else if (!/[0-9]/.test(password)) {
            newErrors.password = "Debe incluir al menos un número";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            newErrors.password = "Debe incluir al menos un carácter especial (ej: !@#$%)";
        }

        // 4. Validación de Confirmar Contraseña
        if (password !== formData.confirmpassword) {
            newErrors.confirmpassword = "Las contraseñas no coinciden";
        }
        
        return newErrors;
    };

    // 4. ENVÍO DEL FORMULARIO
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();

        // CORREGIDO: Usamos el punto (.) en lugar de la coma (,) antes de length
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess(false);
        } else {
            setErrors({});
            setSuccess(true);
            // Aquí enviarías los datos a tu backend
            console.log("¡Todo correcto! Datos listos:", formData);
        }
    };
    
    // 5. LA VISTA (El HTML/JSX)
    return (
        <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-xl mt-10 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Registro de Usuario</h2>
            
            {/* Mensaje de éxito dinámico */}
            {success && (
                <div className="mb-6 p-3 bg-green-100 border border-green-200 text-green-700 rounded-md text-center font-medium">
                    ¡Registro validado con éxito!
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* --- Input Nombre --- */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleChange}
                        className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Tu nombre completo"
                    />
                    {/* Renderizado condicional del error */}
                    {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                </div>

                {/* --- Input Email --- */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="correo@ejemplo.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* --- Input Password --- */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange}
                        className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Mínimo 6 caracteres"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>

                {/* --- Input Confirmar Password --- */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        name="confirmpassword" 
                        value={formData.confirmpassword} 
                        onChange={handleChange}
                        className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmpassword ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Repite tu contraseña"
                    />
                    {errors.confirmpassword && <p className="text-red-500 text-xs mt-1">{errors.confirmpassword}</p>}
                </div>

                {/* --- Botón Submit --- */}
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 mt-4"
                >
                    Registrarse
                </button>
                
            </form>
        </div>
    );
}