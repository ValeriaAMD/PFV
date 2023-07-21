import React,{ useState} from "react";
import { AutorContexcto}  from "./Autor.Contexto";
interface IAutorProvider{
    children:React.ReactNode;
}
export const AutorProvider =(propiedad:IAutorProvider)=>{
    const [IdA, setIdA] = useState(0)
    const [refA, setrefA] = useState(false)


return(
    <AutorContexcto.Provider value={{
        IdA,
        setIdA,
        refA,
        setrefA
    }}>
        {propiedad.children}
    </AutorContexcto.Provider>
)
}