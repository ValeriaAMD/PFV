import React,{ useState} from "react";
import { LibroContexto } from "./Libro.Contexto";
interface ILibroProvider{
    children:React.ReactNode;
}
export const LibroProvider =(propiedad:ILibroProvider)=>{
    const [IdL, setIdL] = useState(0)
    const [refL,setrefL] = useState(false)


return(
    <LibroContexto.Provider value={{
        IdL,
        setIdL,
        refL,
        setrefL
    }}>
        {propiedad.children}
    </LibroContexto.Provider>
)
}