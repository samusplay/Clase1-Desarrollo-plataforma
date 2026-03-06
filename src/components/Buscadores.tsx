
export default  function Buscadores(){
    //definimos el array
    const buscadores = [
    { nombre: 'Google', url: 'http://www.google.com' },
    { nombre: 'Bing', url: 'http://www.bing.com' },
    { nombre: 'El Tiempo', url: 'http://www.eltiempo.com' }
  ];
    return (
        <div>
            {/**Recorrer el arreglo con map index es la llave principal */}
            {buscadores.map((buscador,index)=>(
                <a
                key={index}
                href={buscador.url}
                target="_blank"
                rel="noopener noreferrer"
                className=""
                >
                    {buscador.nombre}
                </a>
            ))}
        </div>
    
    );

}