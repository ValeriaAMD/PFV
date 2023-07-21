import React, { useState, useCallback, useEffect,useContext} from 'react'
import {Table, Button, Container} from 'react-bootstrap'
import { IAutor } from '../Accions/Modelos/Autor.Modelo'
import { AutorServicio } from '../Accions/Servicios/Autor.Servicio'
import { AutorContexcto } from '../Contexts/Autor.Contexto'
import { useNavigate} from 'react-router-dom'


export const ListarAutor = () => {
  const urlx = useNavigate();
  const {refA,setrefA,setIdA} = useContext(AutorContexcto)
    const EliminarA = useCallback(
      (idelet:number ) => {
        AutorServicio.Eliminar(idelet).then(
            (correct)=>{
                if(correct.status===200){
                    alert("Se elimino el id: "+idelet)
                    setrefA(!refA)
                }
            }
        )
      },
      [refA],
    )
    
    const [Id, setId] = useState(0)
    const [dataAutor, setDataAutor] = useState<[IAutor]>()
    const BuscarTodos = useCallback(
      () => {
        AutorServicio.Consultar().then(
            (apro)=> {
                if(apro.status===200){
                    setDataAutor(apro.data)
                }

            }
        ).catch(
            (error)=> {
                alert(error)
            }
        )
      },
      
      [refA],
    )
    useEffect(() => {
      BuscarTodos()
        return () => {
      
      }
    }, [refA])
    
    
    
  return (
    <div>
        <h1>Autores:</h1>
        <Container>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Origen</th>
          <th>         </th>
          <th>          </th>
        </tr>
      </thead>
      <tbody>
      {
        dataAutor && dataAutor?.map(
            (autor,i)=>(
                <tr key={i}>
          <td>
              {autor.id}
          </td>
          <td>
              {autor.nombre}
          </td>
          <td>
              {autor.apellido}
          </td>
          <td>
              {autor.origen}
          </td>
       
                    
                    <td>
                        <center>
                    <Button variant="warning"
                    onClick={()=>{setIdA(autor.id) ; urlx('../editarAu')}}
                    >Editar</Button>{' '}
                    </center>
                    </td>
                    <td>
                        <center>
                    <Button variant="danger"
                    onClick={()=>{EliminarA(autor.id)}}
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
