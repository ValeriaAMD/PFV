import axios from "axios";
import { IEditorial } from "../Modelos/Editorial.Modelo";

const urlbase="http://127.0.0.1:8000/api/"
const endpoint = "editoriales/"

const Consultar = async ()=>{
    return await axios.get(urlbase+endpoint)
}

const Guardar = async (box:IEditorial)=>{
    return await axios.post(urlbase+endpoint,box)
}

const Actualizar = async (id: number, boxi:IEditorial)=>{
    return await axios.put(urlbase+endpoint+id,boxi)
};
const Eliminar = async (id: number)=>{
    return await axios.delete(urlbase+endpoint+id)
};
const ConsultarById = async (id:number) =>{
    return await axios.get(urlbase+endpoint+id)
}
export const EditorialServicio={
    Consultar,
    Actualizar,
    ConsultarById,
    Eliminar,
    Guardar
}