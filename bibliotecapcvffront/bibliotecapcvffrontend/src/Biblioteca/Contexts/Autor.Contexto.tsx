import { createContext } from "react";

 interface IAutorContexto{
    refA:boolean,
    setrefA:React.Dispatch<React.SetStateAction<boolean>>,
    IdA:number
    setIdA:React.Dispatch<React.SetStateAction<number>>
 }
 export const AutorContexcto = createContext({}as IAutorContexto)