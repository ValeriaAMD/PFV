import { useCallback, useState, useEffect,useContext } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IUsuario } from '../Accions/Modelos/Usuario.Modelo';
import Button from 'react-bootstrap/Button';
import { UsuarioServicio } from '../Accions/Servicios/Usuario.Servicio';
import { UsuariosContexto } from '../Contexts/Usuarios.Contexto';
import { useNavigate} from 'react-router-dom';


export const EditarUsuario = () => {
  const urlx = useNavigate();
  const {refU,setrefU,IdU} = useContext(UsuariosContexto)
  const[DataUsaurios,setDataUsaurios] = useState<IUsuario>({
    id:0,
    nombre: 'null', 
    apellido: 'null',
    direccion: 'null',
    telefono: 'null'

  })
  
 

  const BuscarPorID = useCallback(
    () => {
      UsuarioServicio.ConsultarById(IdU).then(
        (comprobar)=>{
          if(comprobar.status===200){
            setDataUsaurios(comprobar.data)
          }
        }
      )
    },
    [IdU],
  )
  
  useEffect(() => {
    BuscarPorID();
  
    return () => {
      
    }
  }, [IdU])
  
  const actualizacion = () =>{
    UsuarioServicio.Actualizar(IdU,DataUsaurios).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se actualizo con exito '+IdU)
          setrefU(!refU)
        }
      }
    )
  }

  return (
    <div>
<Container>
      <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
        <Form.Control value={DataUsaurios.nombre} 
        onChange={
          (event)=>{
            setDataUsaurios(
              {...DataUsaurios, nombre: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingMarca" label="Apellido" className="mb-3">
        <Form.Control value={DataUsaurios.apellido} 
        onChange={
          (event)=>{
            setDataUsaurios(
              {...DataUsaurios, apellido: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingMarca" label="Direccion" className="mb-3">
        <Form.Control value={DataUsaurios.direccion} 
        onChange={
          (event)=>{
            setDataUsaurios(
              {...DataUsaurios, direccion: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingMarca" label="Telefono" className="mb-3">
        <Form.Control value={DataUsaurios.telefono} 
        onChange={
          (event)=>{
            setDataUsaurios(
              {...DataUsaurios, telefono: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>
      <Button variant="outline-warning"onClick={()=>{actualizacion(); urlx('../listaU')}} className="mb-3">Actualizar</Button>{' '}
      </Container>
    </div>
  )
}