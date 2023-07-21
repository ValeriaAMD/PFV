import { createContext } from "react";

interface IEjmContexto{
    refEjmES:boolean,
    setrefEjmES:React.Dispatch<React.SetStateAction<boolean>>,
    IdEjmES:number,
    setIdEjmES:React.Dispatch<React.SetStateAction<number>>
}
export const EstadoEjemplaresContexto = createContext({}as IEjmContexto)