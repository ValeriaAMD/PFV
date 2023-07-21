import React,{ useState} from "react";
import { EjemplaresContexto } from "./Ejemplares.Contexto";
interface IEjemplaresProvider{
    children:React.ReactNode;
}
export const EjemplaresProvider =(propiedad:IEjemplaresProvider)=>{
    const [IdEjm, setIdEjm] = useState(0)
    const [refEjm,setrefEjm] = useState(false)


return(
    <EjemplaresContexto.Provider value={{
        IdEjm,
        setIdEjm,
        refEjm,
        setrefEjm
    }}>
        {propiedad.children}
    </EjemplaresContexto.Provider>
)
}