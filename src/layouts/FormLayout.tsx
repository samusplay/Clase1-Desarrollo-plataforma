import { Outlet } from "react-router-dom";

export default function FormLayout(){
  return(
      // Contenedor principal: Ocupa toda la pantalla (min-h-screen) y centra el contenido usando Flexbox
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 sm:p-8">
      
      {/* Sección de Branding / Encabezado */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">
          Desarollo plataforma
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Ingresa tus datos de forma segura
        </p>
      </div>

      {/* Contenedor de la Tarjeta (Aquí vivirá tu formulario) */}
      <div className="w-full max-w-md lg:max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 transition-all duration-500">
        
        {/* REGLA DE ORO: El Outlet es el "hueco" donde React Router 
            inyectará las vistas hijas (como tu LoginForm) */}
        <Outlet />
        
      </div>

      {/* Footer minimalista */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>

    </div>
  )

}