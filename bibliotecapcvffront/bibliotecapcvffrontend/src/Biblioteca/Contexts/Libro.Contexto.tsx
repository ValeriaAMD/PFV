import { createContext } from "react";

interface ILContexto{
    refL:boolean,
    setrefL:React.Dispatch<React.SetStateAction<boolean>>,
    IdL:number,
    setIdL:React.Dispatch<React.SetStateAction<number>>
}
export const LibroContexto = createContext({}as ILContexto)