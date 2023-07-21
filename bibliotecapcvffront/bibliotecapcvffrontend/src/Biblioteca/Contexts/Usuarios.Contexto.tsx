import { createContext } from "react";
 
interface IUContexto{
    refU:boolean,
    setrefU:React.Dispatch<React.SetStateAction<boolean>>,
    IdU:number,
    setIdU:React.Dispatch<React.SetStateAction<number>>
    
}
export const UsuariosContexto = createContext({}as IUContexto)