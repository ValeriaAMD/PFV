import { createContext } from "react";

interface IEditorial{
    refEd:boolean,
    setrefEd:React.Dispatch<React.SetStateAction<boolean>>,
    IdEd:number,
    setIdEd:React.Dispatch<React.SetStateAction<number>>
}
export const EditorialContexto = createContext({}as IEditorial)