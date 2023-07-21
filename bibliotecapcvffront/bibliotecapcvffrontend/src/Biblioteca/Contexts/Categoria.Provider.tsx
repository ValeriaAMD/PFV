import React, {useState} from "react";
import { CategoriaContexto } from "./Categoria.Contexto";
interface ICategariaProvider{
    children:React.ReactNode;
}

export const CategoriaProvider =(propiedad:ICategariaProvider)=>{
    const [IdC, setIdC] = useState(0)
    const [refC,setrefC] = useState(false)

return(
    <CategoriaContexto.Provider value={{
        IdC,
        setIdC,
        refC,
        setrefC
    }}>
        {propiedad.children}
    </CategoriaContexto.Provider>
)
}