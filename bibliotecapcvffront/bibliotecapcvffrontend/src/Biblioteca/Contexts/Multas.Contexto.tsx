import { createContext } from "react";

interface IMContexto{
    refM:boolean,
    setrefM:React.Dispatch<React.SetStateAction<boolean>>,
    IdM:number,
    setIdM:React.Dispatch<React.SetStateAction<number>>
}
export const MultasContexto = createContext ({}as IMContexto)