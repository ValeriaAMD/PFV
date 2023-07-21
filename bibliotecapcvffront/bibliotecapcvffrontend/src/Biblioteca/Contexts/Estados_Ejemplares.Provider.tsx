import React,{ useState} from "react";
import { EstadoEjemplaresContexto } from "./Estados_Ejemplares.Contexto";
interface IEstadoEjemplaresProvider{
    children:React.ReactNode;
}
export const EstadoEjemplaresProvider =(propiedad:IEstadoEjemplaresProvider)=>{
    const [IdEjmES, setIdEjmES] = useState(0)
    const [refEjmES,setrefEjmES] = useState(false)


return(
    <EstadoEjemplaresContexto.Provider value={{
        IdEjmES,
        setIdEjmES,
        refEjmES,
        setrefEjmES
    }}>
        {propiedad.children}
    </EstadoEjemplaresContexto.Provider>
)
}
