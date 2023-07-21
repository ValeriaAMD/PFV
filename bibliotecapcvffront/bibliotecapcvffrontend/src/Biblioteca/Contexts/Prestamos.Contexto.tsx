import { createContext } from "react";
interface IPrestamos{
    refP:boolean,
    setrefP:React.Dispatch<React.SetStateAction<boolean>>,
    IdP:number,
    setIdP:React.Dispatch<React.SetStateAction<number>>
}

export const PrestamosContexto = createContext({}as IPrestamos)