import React, { useState, useCallback, useEffect,useContext} from 'react'
import {Table, Button, Container} from 'react-bootstrap'
import { IUsuario } from '../Accions/Modelos/Usuario.Modelo';
import { UsuarioServicio } from '../Accions/Servicios/Usuario.Servicio';
import { UsuariosContexto } from '../Contexts/Usuarios.Contexto';
import { useNavigate} from 'react-router-dom'
export const ListarUsuario = () => {
  const urlx = useNavigate();
  const {refU,setrefU,IdU,setIdU} = useContext(UsuariosContexto)
    const EliminarU = useCallback(
      (idelet:number ) => {
        UsuarioServicio.Eliminar(idelet).then(
            (correct)=>{
                if(correct.status===200){
                    alert("Se elimino el id: "+idelet)
                    setrefU(!refU)
                }
            }
        )
      },
      [refU],
    )
    
    const [Id, setId] = useState(0)
    const [dataUsuario, setDataUsuario] = useState<[IUsuario]>()
    const BuscarTodos = useCallback(
      () => {
        UsuarioServicio.Consultar().then(
            (apro)=> {
                if(apro.status===200){
                    setDataUsuario(apro.data)
                }

            }
        ).catch(
            (error)=> {
                alert(error)
            }
        )
      },
      
      [refU],
    )
    useEffect(() => {
      BuscarTodos()
        return () => {
      
      }
    }, [refU])
    
    
    
  return (
    <div>
        <h1>Usuario:</h1>
        <Container>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>         </th>
            <th>         </th>
        </tr>
      </thead>
      <tbody>
      {
        dataUsuario && dataUsuario?.map(
            (usuario,i)=>(
                <tr key={i}>
          <td>
            {usuario.id}
          </td>
          <td>
              {usuario.nombre}
          </td>
          <td>
              {usuario.apellido}
          </td>
          <td>
              {usuario.direccion}
          </td>
          <td>
              {usuario.telefono}
          </td>
    
   
                    <td>
                        <center>
                    <Button variant="warning"
                    onClick={()=>{setIdU(usuario.id) ; urlx('../editarU')}}
                    >Editar</Button>{' '}
                    </center>
                    </td>
                    <td>
                        <center>
                    <Button variant="danger"
                    onClick={()=>{EliminarU(usuario.id)}}
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
