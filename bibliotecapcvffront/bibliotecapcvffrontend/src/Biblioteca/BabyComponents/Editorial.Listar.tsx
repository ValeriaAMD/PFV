import React, { useState, useCallback, useEffect,useContext} from 'react'
import {Table, Button, Container} from 'react-bootstrap'
import { IEditorial } from '../Accions/Modelos/Editorial.Modelo'
import { EditorialServicio } from '../Accions/Servicios/Editorial.Servicio'
import { EditorialContexto } from '../Contexts/Editorial.Contexto'
import { useNavigate} from 'react-router-dom'



export const ListarEditorial = () => {
  const urlx = useNavigate();
  const {refEd,setrefEd,setIdEd} = useContext(EditorialContexto)
    const EliminarE = useCallback(
      (idelet:number ) => {
        EditorialServicio.Eliminar(idelet).then(
            (correct)=>{
                if(correct.status===200){
                    alert("Se elimino el id: "+idelet)
                    setrefEd(!refEd)
                }
            }
        )
      },
      [refEd],
    )
    
    const [dataEditorial, setDataEditorial] = useState<[IEditorial]>()
    const BuscarTodos = useCallback(
      () => {
        EditorialServicio.Consultar().then(
            (apro)=> {
                if(apro.status===200){
                    setDataEditorial(apro.data)
                }

            }
        ).catch(
            (error)=> {
                alert(error)
            }
        )
      },
      
      [refEd],
    )
    useEffect(() => {
      BuscarTodos()
        return () => {
      
      }
    }, [refEd])
    
    
    
  return (
    <div>
        <h1>Editorial:</h1>
        <Container>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>ID</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Telefono</th>
          <th>         </th>
          <th>          </th>
        </tr>
      </thead>
      <tbody>
      {
        dataEditorial && dataEditorial?.map(
            (editorial,i)=>(
                <tr key={i}>
          <td>
            {editorial.id}
          </td>
          <td>
              {editorial.nombre}
          </td>
          <td>
              {editorial.direccion}
          </td>
          <td>
              {editorial.telefono}
          </td>
      
       
                    
                    <td>
                        <center>
                    <Button variant="warning"
                    onClick={()=>{setIdEd(editorial.id) ; urlx('../editarEdit')}}
                    >Editar</Button>{' '}
                    </center>
                    </td>
                    <td>
                        <center>
                    <Button variant="danger"
                    onClick={()=>{EliminarE(editorial.id)}}
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
