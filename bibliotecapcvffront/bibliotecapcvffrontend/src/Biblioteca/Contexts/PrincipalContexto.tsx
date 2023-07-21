import { createContext } from "react";

interface IPrincipal{
    iniciar:boolean,
    setiniciar:React.Dispatch<React.SetStateAction<boolean>>
    IdPri:number,
    setIdPri: React.Dispatch<React.SetStateAction<number>>
}
export const PrincipalContexto =createContext({}as IPrincipal)