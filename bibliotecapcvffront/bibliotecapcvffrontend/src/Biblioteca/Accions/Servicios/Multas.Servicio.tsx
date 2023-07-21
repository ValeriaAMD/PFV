import axios from "axios";
import { IMultas } from "../Modelos/Multas.Modelo";

const urlbase="http://127.0.0.1:8000/api/"
const endpoint = "caileconlaferia/"

const Consultar = async ()=>{
    return await axios.get(urlbase+endpoint)
}

const Guardar = async (box:IMultas)=>{
    return await axios.post(urlbase+endpoint,box)
}

const Actualizar = async (id: number, boxi:IMultas)=>{
    return await axios.put(urlbase+endpoint+id,boxi)
};
const Eliminar = async (id: number)=>{
    return await axios.delete(urlbase+endpoint+id)
};
const ConsultarById = async (id:number) =>{
    return await axios.get(urlbase+endpoint+id)
}
export const MultasServicio={
    Consultar,
    Actualizar,
    ConsultarById,
    Eliminar,
    Guardar
}