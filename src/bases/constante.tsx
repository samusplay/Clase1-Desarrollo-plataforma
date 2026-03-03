 //variables ejercio
    let firstName='Samuel'
    let secondName='Esteban'
    console.log(firstName,secondName)
    //sensible
    let containsLetterS=firstName.includes('S')

    //para inyectar el metodo
    console.log({containsLetterS})
export type Data={
    firstName:string
    secondName:string
}
export default function Constante({firstName,secondName}:Data){
return(
    <>
    <p>{firstName}</p>
    <p>{secondName}</p>
    </>
)
}