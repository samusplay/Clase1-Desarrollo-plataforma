import ArmadorCombos from "../components/ArmadorCombos";

export default function OfertaRetroView() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      
      {/* SECCIÓN DE ENCABEZADO */}
      <header className="max-w-5xl mx-auto text-center mb-12">
        <span className="inline-block bg-indigo-100 text-indigo-800 font-black tracking-widest uppercase text-xs px-4 py-1.5 rounded-full border-2 border-indigo-900 shadow-[2px_2px_0px_0px_rgba(49,46,129,1)] mb-4">
          Nivel Secreto Desbloqueado
        </span>
        
        <h1 className="text-4xl font-black text-gray-900 tracking-tighter sm:text-5xl uppercase">
          Arma tu Bundle Retro
        </h1>
        
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-medium text-sm sm:text-base bg-white p-4 rounded-xl border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Elige tus <span className="font-black text-indigo-600">3 accesorios</span> favoritos, arrástralos hacia la caja misteriosa y desbloquea un <strong>15% de descuento automático</strong> en tu compra.
        </p>
      </header>

      {/* COMPONENTE PRINCIPAL (EL CEREBRO DEL DRAG AND DROP) */}
      <main className="relative z-10">
        <ArmadorCombos />
      </main>

      {/* FOOTER SIMPLE PARA LA VISTA */}
      <footer className="mt-20 max-w-5xl mx-auto text-center border-t-2 border-gray-200 pt-8">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
          © 2026 Retro Store. Oferta válida hasta agotar existencias.
        </p>
      </footer>

    </div>
  );
}