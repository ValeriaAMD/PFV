import React from "react";
import { PrincipalContexto } from "./PrincipalContexto";
import { useState } from "react";
interface IPrincipalProvider{
    children:React.ReactNode;
}
export const PrProvider = (propiedad:IPrincipalProvider) => {
    const [IdPri, setIdPri] = useState(0);
    const [iniciar, setiniciar] = useState(false)
  return (
   <PrincipalContexto.Provider value={
    {
      IdPri,
      setIdPri,
      iniciar,
      setiniciar
    }
   }>
   {propiedad.children}
   </PrincipalContexto.Provider>
  )
}
