import React,{useState} from "react";
import { EditorialContexto } from "./Editorial.Contexto";
interface IEditorialProvider{
    children:React.ReactNode;
}
export const EditorialProvider =(propiedad:IEditorialProvider)=>{{
    const [IdEd, setIdEd] = useState(0)
    const [refEd,setrefEd] = useState(false)

    return(
        <EditorialContexto.Provider value ={{
            IdEd,
            setIdEd,
            refEd,
            setrefEd
        }}>
            {propiedad.children}
        </EditorialContexto.Provider>
    )

}}