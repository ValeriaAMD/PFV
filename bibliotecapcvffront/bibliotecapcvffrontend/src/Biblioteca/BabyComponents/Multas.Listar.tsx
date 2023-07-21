import React, { useState, useCallback, useEffect,useContext} from 'react'
import {Table, Button, Container} from 'react-bootstrap'
import { IMultas } from '../Accions/Modelos/Multas.Modelo';
import { MultasContexto } from '../Contexts/Multas.Contexto';
import { MultasServicio } from '../Accions/Servicios/Multas.Servicio';
import { useNavigate} from 'react-router-dom'
export const ListarMultas = () => {
  const urlx = useNavigate();
  const {refM,setrefM,setIdM} = useContext(MultasContexto)
    const EliminarM = useCallback(
      (idelet:number ) => {
        MultasServicio.Eliminar(idelet).then(
            (correct)=>{
                if(correct.status===200){
                    alert("Se elimino el id: "+idelet)
                    setrefM(!refM)
                }
            }
        )
      },
      [refM],
    )
    
   
    const [dataMultas, setDataMultas] = useState<[IMultas]>()
    const BuscarTodos = useCallback(
      () => {
        MultasServicio.Consultar().then(
            (apro)=> {
                if(apro.status===200){
                    setDataMultas(apro.data)
                }

            }
        ).catch(
            (error)=> {
                alert(error)
            }
        )
      },
      
      [refM],
    )
    useEffect(() => {
      BuscarTodos()
        return () => {
      
      }
    }, [refM])
    
    
    
  return (
    <div>
        <h1>Multas:</h1>
        <Container>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>ID</th>
            <th>Monto</th>
            <th>Fecha de pago</th>
            <th>Prestamo</th>
          <th>         </th>
          <th>          </th>
        </tr>
      </thead>
      <tbody>
      {
        dataMultas && dataMultas?.map(
            (multas,i)=>(
                <tr key={i}>
          <td>
            {multas.id}
          </td>
          <td>
              {multas.monto}
          </td>
          <td>
              {multas.fecha_pago}
          </td>
          <td>
              {multas.prestamo_id}
          </td>
    
      
       
                    
                    <td>
                        <center>
                    <Button variant="warning"
                    onClick={()=>{setIdM(multas.id) ; urlx('../editarM')}}
                    >Editar</Button>{' '}
                    </center>
                    </td>
                    <td>
                        <center>
                    <Button variant="danger"
                    onClick={()=>{EliminarM(multas.id)}}
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
