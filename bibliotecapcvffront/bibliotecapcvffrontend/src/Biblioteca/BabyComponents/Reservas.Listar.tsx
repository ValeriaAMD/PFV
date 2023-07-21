import React, { useState, useCallback, useEffect,useContext} from 'react'
import {Table, Button, Container} from 'react-bootstrap'
import { IReservas } from '../Accions/Modelos/Reservas.Modelo'
import { ReservasServicio } from '../Accions/Servicios/Reservas.Servicio'
import { ReservasContexto } from '../Contexts/Reservas.Contexto'
import { useNavigate} from 'react-router-dom'
export const ListarReservas = () => {
  const urlx = useNavigate();
  const {refR,setrefR,setIdR} = useContext(ReservasContexto)
    const EliminarR = useCallback(
      (idelet:number ) => {
        ReservasServicio.Eliminar(idelet).then(
            (correct)=>{
                if(correct.status===200){
                    alert("Se elimino el id: "+idelet)
                    setrefR(!refR)
                }
            }
        )
      },
      [refR],
    )
    
    const [Id, setId] = useState(0)
    const [dataReservas, setDataReservas] = useState<[IReservas]>()
    const BuscarTodos = useCallback(
      () => {
        ReservasServicio.Consultar().then(
            (apro)=> {
                if(apro.status===200){
                    setDataReservas(apro.data)
                }

            }
        ).catch(
            (error)=> {
                alert(error)
            }
        )
      },
      
      [refR],
    )
    useEffect(() => {
      BuscarTodos()
        return () => {
      
      }
    }, [refR])
    
    
    
  return (
    <div>
        <h1>Reservas:</h1>
        <Container>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>ID</th>
            <th>Fecha de reserva</th>
            <th>Usuario</th>
            <th>Ejemplar</th>
        
          <th>         </th>
          <th>          </th>
        </tr>
      </thead>
      <tbody>
      {
        dataReservas && dataReservas?.map(
            (reservas,i)=>(
                <tr key={i}>
          <td>
            {reservas.id}
          </td>
          <td>
              {reservas.fecha_reserva}
          </td>
          <td>
              {reservas.usuario_id}
          </td>
          <td>
              {reservas.ejemplar_id}
          </td>
    
      
       
                    
                    <td>
                        <center>
                    <Button variant="warning"
                    onClick={()=>{setIdR(reservas.id) ; urlx('../editarR')}}
                    >Editar</Button>{' '}
                    </center>
                    </td>
                    <td>
                        <center>
                    <Button variant="danger"
                    onClick={()=>{EliminarR(reservas.id)}}
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
