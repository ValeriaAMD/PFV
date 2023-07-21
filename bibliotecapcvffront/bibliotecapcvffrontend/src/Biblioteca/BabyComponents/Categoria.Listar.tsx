import React, { useState, useCallback, useEffect,useContext} from 'react'
import {Table, Button, Container} from 'react-bootstrap'
import { ICategoria } from '../Accions/Modelos/Categoria.Modelo'
import { CategoriaServicio } from '../Accions/Servicios/Categoria.Servicio'
import { CategoriaContexto } from '../Contexts/Categoria.Contexto'
import { useNavigate} from 'react-router-dom'


export const ListarCategoria = () => {
  const urlx = useNavigate();
  const {refC,setrefC,setIdC} = useContext(CategoriaContexto)
    const EliminarC = useCallback(
      (idelet:number ) => {
        CategoriaServicio.Eliminar(idelet).then(
            (correct)=>{
                if(correct.status===200){
                    alert("Se elimino el id: "+idelet)
                    setrefC(!refC)
                }
            }
        )
      },
      [refC],
    )
    
    const [Id, setId] = useState(0)
    const [dataCategoria, setDataCategoria] = useState<[ICategoria]>()
    const BuscarTodos = useCallback(
      () => {
        CategoriaServicio.Consultar().then(
            (apro)=> {
                if(apro.status===200){
                    setDataCategoria(apro.data)
                }

            }
        ).catch(
            (error)=> {
                alert(error)
            }
        )
      },
      
      [refC],
    )
    useEffect(() => {
      BuscarTodos()
        return () => {
      
      }
    }, [refC])
    
    
    
  return (
    <div>
        <h1>Categorias:</h1>
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
        dataCategoria && dataCategoria?.map(
            (categoria,i)=>(
                <tr key={i}>
          <td>
            {categoria.id}
          </td>
          <td>
              {categoria.nombre}
          </td>
          <td>
              {categoria.descripcion}
          </td>
      
       
                    
                    <td>
                        <center>
                    <Button variant="warning"
                    onClick={()=>{setIdC(categoria.id) ; urlx('../editarCate')}}
                    >Editar</Button>{' '}
                    </center>
                    </td>
                    <td>
                        <center>
                    <Button variant="danger"
                    onClick={()=>{EliminarC(categoria.id)}}
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
