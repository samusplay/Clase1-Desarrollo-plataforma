//props
export interface ResultadoSuma{
    valor1:number;
    valor2:number;
    resultado:number

}
interface ListadoProps{
    resultados:ResultadoSuma[]
}
export default function ListaResultados({ resultados }: ListadoProps){

    //validacion
    if (resultados.length === 0) {
        return <p className="text-gray-500 italic mt-4 text-center">No hay operaciones registradas.</p>;
    }
    return(
        <ul className="mt-6 space-y-2">
            {resultados.map((elemento, index) => (
                <li key={index} className="bg-gray-50 p-3 rounded-md border border-gray-200 shadow-sm flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    La suma de <span className="font-semibold">{elemento.valor1}</span> y <span className="font-semibold">{elemento.valor2}</span> es <span className="font-bold text-green-600">{elemento.resultado}</span>
                </li>
            ))}
        </ul>
    );

}