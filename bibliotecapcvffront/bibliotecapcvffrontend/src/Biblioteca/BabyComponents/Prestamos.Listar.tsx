import React, { useState, useCallback, useEffect,useContext} from 'react'
import {Table, Button, Container} from 'react-bootstrap'
import { IPrestamos } from '../Accions/Modelos/Prestamos.Modelo'; 
import { PrestamosServicio } from '../Accions/Servicios/Prestamos.Servicio'; 
import { PrestamosContexto } from '../Contexts/Prestamos.Contexto'; 
import { useNavigate} from 'react-router-dom'
export const ListarPrestamos = () => {
  const urlx = useNavigate();
  const {refP,setrefP,IdP,setIdP} = useContext(PrestamosContexto)
    const EliminarP = useCallback(
      (idelet:number ) => {
        PrestamosServicio.Eliminar(idelet).then(
            (correct)=>{
                if(correct.status===200){
                    alert("Se elimino el id: "+idelet)
                    setrefP(!refP)
                }
            }
        )
      },
      [refP],
    )
    
  
    const [dataPrestamos, setDataPrestamos] = useState<[IPrestamos]>()
    const BuscarTodos = useCallback(
      () => {
        PrestamosServicio.Consultar().then(
            (apro)=> {
                if(apro.status===200){
                    setDataPrestamos(apro.data)
                }

            }
        ).catch(
            (error)=> {
                alert(error)
            }
        )
      },
      
      [refP],
    )
    useEffect(() => {
      BuscarTodos()
        return () => {
      
      }
    }, [refP])
    
    
    
  return (
    <div>
        <h1>Prestamos:</h1>
<Container>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>ID</th>
            <th>Fecha Prestamo</th>
            <th>Usuario</th>
            <th>Ejemplar</th>
          <th>         </th>
          <th>          </th>
        </tr>
      </thead>
      <tbody>
      {
        dataPrestamos && dataPrestamos?.map(
            (prestamos,i)=>(
                <tr key={i}>
          <td>
            {prestamos.id}
          </td>
          <td>
              {prestamos.fecha_prestamo}
          </td>
          <td>
              {prestamos.usuario_id}
          </td>
          <td>
              {prestamos.ejemplar_id}
          </td>
    
      
       
                    
                    <td>
                        <center>
                    <Button variant="warning"
                    onClick={()=>{setIdP(prestamos.id) ; urlx('../editarP')}}
                    >Editar</Button>{' '}
                    </center>
                    </td>
                    <td>
                        <center>
                    <Button variant="danger"
                    onClick={()=>{EliminarP(prestamos.id)}}
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
