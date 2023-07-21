import React, { useState, useCallback, useEffect,useContext} from 'react'
import {Table, Button, Container} from 'react-bootstrap'
import { IEjemplares } from '../Accions/Modelos/Ejemplares.Modelo'
import { EjemplaresServicio } from '../Accions/Servicios/Ejemplares.Servicio'
import { EjemplaresContexto } from '../Contexts/Ejemplares.Contexto'
import { useNavigate} from 'react-router-dom'
export const ListarEjemplares = () => {
  const urlx = useNavigate();
  const {refEjm,setrefEjm,setIdEjm} = useContext(EjemplaresContexto)
    const EliminarE = useCallback(
      (idelet:number ) => {
        EjemplaresServicio.Eliminar(idelet).then(
            (correct)=>{
                if(correct.status===200){
                    alert("Se elimino el id: "+idelet)
                    setrefEjm(!refEjm)
                }
            }
        )
      },
      [refEjm],
    )
    
    const [Id, setId] = useState(0)
    const [dataEjemplares, setDataEjemplares] = useState<[IEjemplares]>()
    const BuscarTodos = useCallback(
      () => {
        EjemplaresServicio.Consultar().then(
            (apro)=> {
                if(apro.status===200){
                    setDataEjemplares(apro.data)
                }

            }
        ).catch(
            (error)=> {
                alert(error)
            }
        )
      },
      
      [refEjm],
    )
    useEffect(() => {
      BuscarTodos()
        return () => {
      
      }
    }, [refEjm])
    
    
    
  return (
    <div>
        <h1>Ejemplares:</h1>
        <Container>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>ID</th>
            <th>Libro</th>
            <th>Estado de Ejemplares</th>
          <th>         </th>
          <th>          </th>
        </tr>
      </thead>
      <tbody>
      {
        dataEjemplares && dataEjemplares?.map(
            (ejemplares,i)=>(
                <tr key={i}>
          <td>
            {ejemplares.id}
          </td>
          <td>
              {ejemplares.libro_id}
          </td>
          <td>
              {ejemplares.estado_id}
          </td>
        
                    
                    <td>
                        <center>
                    <Button variant="warning"
                    onClick={()=>{setIdEjm(ejemplares.id) ; urlx('../editarEjem')}}
                    >Editar</Button>{' '}
                    </center>
                    </td>
                    <td>
                        <center>
                    <Button variant="danger"
                    onClick={()=>{EliminarE(ejemplares.id)}}
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
