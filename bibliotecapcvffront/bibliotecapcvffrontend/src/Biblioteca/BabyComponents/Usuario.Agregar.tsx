import { useContext, useState } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IUsuario } from '../Accions/Modelos/Usuario.Modelo';
import Button from 'react-bootstrap/Button';
import { UsuarioServicio } from '../Accions/Servicios/Usuario.Servicio';
import { UsuariosContexto } from '../Contexts/Usuarios.Contexto';
import { useNavigate} from 'react-router-dom';


export const AgregarUsuario = () => {
  const urlx = useNavigate();
  const {refU,setrefU} = useContext(UsuariosContexto)
  const [DataUsuarios,setDataUsuarios] = useState<IUsuario>({
    id:0,
    nombre: '', 
    apellido: '',
    direccion: '',
    telefono: ''

  })
  
  const paquete = () =>{
    UsuarioServicio.Guardar(DataUsuarios).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se registro con exito '+DataUsuarios.nombre)
          setrefU(!refU)
        }
      }
    )
  }


  return (
    <>
<Container>
      <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
        <Form.Control value={DataUsuarios.nombre} 
        onChange={
          (event)=>{
            setDataUsuarios(
              {...DataUsuarios, nombre: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="apellidos" label="Apellidos" className="mb-3">
        <Form.Control value={DataUsuarios.apellido} 
        onChange={
          (event)=>{
            setDataUsuarios(
              {...DataUsuarios, apellido: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="direccion" label="Direccion" className="mb-3">
        <Form.Control value={DataUsuarios.direccion} 
        onChange={
          (event)=>{
            setDataUsuarios(
              {...DataUsuarios, direccion: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="telefono" label="Telefono" className="mb-3">
        <Form.Control value={DataUsuarios.telefono} 
        onChange={
          (event)=>{
            setDataUsuarios(
              {...DataUsuarios, telefono: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>
      <Button variant="outline-success"onClick={()=>{paquete(); urlx('../listaU')}} className="enviar">Enviar</Button>{' '}
      </Container>
    </>
  )
  
}