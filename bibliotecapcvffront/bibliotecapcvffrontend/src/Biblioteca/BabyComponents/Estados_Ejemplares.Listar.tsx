import React, { useState, useCallback, useEffect,useContext} from 'react'
import {Table, Button, Container} from 'react-bootstrap'
import { IEstadosEjemplares } from '../Accions/Modelos/Estados_Ejemplares.Modelo'
import { EstadoEjemplaresContexto } from '../Contexts/Estados_Ejemplares.Contexto'
import { EstadosEjemplaresServicio } from '../Accions/Servicios/Estados_Ejemplares.Servicio'
import { useNavigate} from 'react-router-dom'
export const ListarEstados = () => {
  const urlx = useNavigate();
  const {refEjmES,setrefEjmES,setIdEjmES} = useContext(EstadoEjemplaresContexto)
    const EliminarE = useCallback(
      (idelet:number ) => {
        EstadosEjemplaresServicio.Eliminar(idelet).then(
            (correct)=>{
                if(correct.status===200){
                    alert("Se elimino el id: "+idelet)
                    setrefEjmES(!refEjmES)
                }
            }
        )
      },
      [refEjmES],
    )
    
    const [Id, setId] = useState(0)
    const [dataEstados, setDataEstados] = useState<[IEstadosEjemplares]>()
    const BuscarTodos = useCallback(
      () => {
        EstadosEjemplaresServicio.Consultar().then(
            (apro)=> {
                if(apro.status===200){
                    setDataEstados(apro.data)
                }

            }
        ).catch(
            (error)=> {
                alert(error)
            }
        )
      },
      
      [refEjmES],
    )
    useEffect(() => {
      BuscarTodos()
        return () => {
      
      }
    }, [refEjmES])
    
    
    
  return (
    <div>
        <h1>Estados:</h1>
        <Container>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
          <th>         </th>
          <th>          </th>
        </tr>
      </thead>
      <tbody>
      {
        dataEstados && dataEstados?.map(
            (estados,i)=>(
                <tr key={i}>
          <td>
            {estados.id}
          </td>
          <td>
              {estados.nombre}
          </td>
          <td>
              {estados.descripcion}
          </td>
        
      
       
                    
                    <td>
                        <center>
                    <Button variant="warning"
                    onClick={()=>{setIdEjmES(estados.id) ; urlx('../editarEsta')}}
                    >Editar</Button>{' '}
                    </center>
                    </td>
                    <td>
                        <center>
                    <Button variant="danger"
                    onClick={()=>{EliminarE(estados.id)}}
                    >Eliminar</Button>{' '}
                    </center>
                    </td>
                </tr>
            )
         )  
        }
      
      </tbody>
    </Table>
    
    </Container>
    </div>
  )

  
}
