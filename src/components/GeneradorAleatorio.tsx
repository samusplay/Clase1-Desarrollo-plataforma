
export default function GeneradorAleatorio() {
    //logica arroy fucntion
    const retornarAleatorio=():number=>Math.trunc(Math.random()*10)

    //objeto del profesor 
    const person = {
        name: 'Samuel',
        age: 20
    }
    return (
    <div>
        <h1>Titulo nivel 1</h1>
        <p>Numero aletorio{retornarAleatorio()}</p>
        <p>Persona:{person.name} -Edad:{person.age}</p>
        
    </div>
)

}