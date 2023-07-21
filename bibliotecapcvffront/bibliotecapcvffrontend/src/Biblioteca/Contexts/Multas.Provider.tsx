import React,{useState} from "react";
import { MultasContexto } from "./Multas.Contexto";
interface IMultasProvider{
    children:React.ReactNode;
}
export const MultasProvider =(propiedad:IMultasProvider)=>{
    const [IdM, setIdM] = useState(0)
    const [refM,setrefM] = useState(false)

    return(
        <MultasContexto.Provider value={{
            IdM,
            setIdM,
            refM,
            setrefM
        }}>
            {propiedad.children}
        </MultasContexto.Provider>
            )
    }