import axios from "axios";
import { IPrincipal } from "../Servicios/Principal.Servicio"; 

const base="http://127.0.0.1:8000/api/"
const endpoint="Provedor/"

const actualizar = async (id:number, reci:IPrincipal) =>{
    return await axios.put(base+endpoint+id,reci)
}

export const PrincipalServicio={
    actualizar
}