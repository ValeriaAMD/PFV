import { createContext } from "react";

interface IRContexto{
    refR:boolean,
    setrefR:React.Dispatch<React.SetStateAction<boolean>>,
    IdR:number,
    setIdR:React.Dispatch<React.SetStateAction<number>>
}
export const ReservasContexto = createContext({}as IRContexto)