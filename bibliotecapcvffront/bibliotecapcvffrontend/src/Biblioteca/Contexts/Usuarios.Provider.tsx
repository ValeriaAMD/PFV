import React,{useState} from "react";
import { UsuariosContexto } from "./Usuarios.Contexto";

interface IUsuariosProvider{
    children:React.ReactNode;
}
export const UsuariosProvider=(propiedad:IUsuariosProvider)=>{

const [IdU, setIdU] = useState(0)
const [refU,setrefU] = useState(false)

return(
    <UsuariosContexto.Provider value={{
        IdU,
        setIdU,
        refU,
        setrefU
    }}>
        {propiedad.children}
    </UsuariosContexto.Provider>
)
}