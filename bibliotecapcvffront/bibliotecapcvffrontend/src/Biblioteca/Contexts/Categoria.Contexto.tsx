import { createContext } from "react";

interface ICatContextos{
    refC:boolean,
    setrefC:React.Dispatch<React.SetStateAction<boolean>>,
    IdC:number,
    setIdC:React.Dispatch<React.SetStateAction<number>>
}
export const CategoriaContexto = createContext ({}as ICatContextos)