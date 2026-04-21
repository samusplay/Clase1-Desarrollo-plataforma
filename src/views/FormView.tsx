import type { FormEvent } from "react";

export default function FormView(){
    //logica 
    function presion(e:FormEvent<HTMLFormElement>){
        e.preventDefault();

        //const formData = new FormData(e.currentTarget);
    //funcion presion para llamarlo submit
    }
    
    return(
      <div>
        <form onSubmit={presion}>

        </form>
      </div>
    )
}


