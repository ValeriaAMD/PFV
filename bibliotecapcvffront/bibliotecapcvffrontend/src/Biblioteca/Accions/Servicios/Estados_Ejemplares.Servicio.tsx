import axios from "axios";
import { IEstadosEjemplares } from "../Modelos/Estados_Ejemplares.Modelo";

const urlbase="http://127.0.0.1:8000/api/"
const endpoint = "estado/"

const Consultar = async ()=>{
    return await axios.get(urlbase+endpoint)
}

const Guardar = async (box:IEstadosEjemplares)=>{
    return await axios.post(urlbase+endpoint,box)
}

const Actualizar = async (id: number, boxi:IEstadosEjemplares)=>{
    return await axios.put(urlbase+endpoint+id,boxi)
};
const Eliminar = async (id: number)=>{
    return await axios.delete(urlbase+endpoint+id)
};
const ConsultarById = async (id:number) =>{
    return await axios.get(urlbase+endpoint+id)
}
export const EstadosEjemplaresServicio={
    Consultar,
    Actualizar,
    ConsultarById,
    Eliminar,
    Guardar
}