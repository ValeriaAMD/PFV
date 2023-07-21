import { createContext } from "react";

interface IEjmContexto{
    refEjm:boolean,
    setrefEjm:React.Dispatch<React.SetStateAction<boolean>>,
    IdEjm:number,
    setIdEjm:React.Dispatch<React.SetStateAction<number>>
}
export const EjemplaresContexto = createContext({}as IEjmContexto)