import React,{useState} from "react";
import { PrestamosContexto } from "./Prestamos.Contexto";
interface IPrestamosProvider{
    children:React.ReactNode;
}
export const PrestamosProvider =(propiedad:IPrestamosProvider)=>{
    const [IdP, setIdP] = useState(0)
    const [refP,setrefP] = useState(false)

return(
    <PrestamosContexto.Provider value={{
    IdP,
    setIdP,
    refP,
    setrefP
    }}>
        {propiedad.children}
    </PrestamosContexto.Provider>
)
}