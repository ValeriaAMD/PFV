import React,{ useState} from "react";
import { ReservasContexto } from "./Reservas.Contexto";
interface IReservasProvider{
    children:React.ReactNode;
}
export const ReservasProvider =(propiedad:IReservasProvider)=>{
    const [IdR, setIdR] = useState(0)
    const [refR,setrefR] = useState(false)


return(
    <ReservasContexto.Provider value={{
        IdR,
        setIdR,
        refR,
        setrefR
    }}>
        {propiedad.children}
    </ReservasContexto.Provider>
)
}