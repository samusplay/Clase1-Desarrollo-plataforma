import Constante from "../bases/constante";
import GeneradorAleatorio from "../components/GeneradorAleatorio";

//pasamos  props a componente padre
export default function BasesView() {
    //usamos hook para darle un dimaismo
    return (
        <>
            <Constante firstName="Samuel" secondName="Esteban " />
            <GeneradorAleatorio />
        </>

    )
}