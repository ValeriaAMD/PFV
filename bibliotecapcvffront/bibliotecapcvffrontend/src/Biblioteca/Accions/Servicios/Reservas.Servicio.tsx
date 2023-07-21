import axios from "axios";
import { IReservas } from "../Modelos/Reservas.Modelo";

const urlbase="http://127.0.0.1:8000/api/"
const endpoint = "reserve/"

const Consultar = async ()=>{
    return await axios.get(urlbase+endpoint)
}

const Guardar = async (box:IReservas)=>{
    return await axios.post(urlbase+endpoint,box)
}

const Actualizar = async (id: number, boxi:IReservas)=>{
    return await axios.put(urlbase+endpoint+id,boxi)
};
const Eliminar = async (id: number)=>{
    return await axios.delete(urlbase+endpoint+id)
};
const ConsultarById = async (id:number) =>{
    return await axios.get(urlbase+endpoint+id)
}
export const ReservasServicio={
    Consultar,
    Actualizar,
    ConsultarById,
    Eliminar,
    Guardar
}