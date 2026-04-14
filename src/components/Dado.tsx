
//definimos un type
interface DadoProps{
    valor:number
}
export default function Dado({valor}:DadoProps){

  return(
    <div className="bg-black text-white w-16 h-16 flex items-center justify-center m-2 rounded-md text-2xl font-bold shadow-md">
        {valor}

    </div>
  )
}