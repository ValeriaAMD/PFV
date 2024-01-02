import { useContext, useState } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IEditorial } from '../Accions/Modelos/Editorial.Modelo';
import Button from 'react-bootstrap/Button';
import { EditorialServicio } from '../Accions/Servicios/Editorial.Servicio';
import { EditorialContexto } from '../Contexts/Editorial.Contexto';
import { useNavigate} from 'react-router-dom';


export const AgregarEditorial = () => {
  const urlx = useNavigate();
  const {refEd,setrefEd} = useContext(EditorialContexto)
  const [DataEditorial,setDataEditorial] = useState<IEditorial>({
    id:0,
    nombre: '', 
    direccion: '',
    telefono: ''
  })
  
  const paquete = () =>{
    EditorialServicio.Guardar(DataEditorial).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se registro con exito '+DataEditorial.nombre)
          setrefEd(!refEd)
        }
      }
    )
  }


  return (
    <>
<Container>
      <FloatingLabel controlId="agregaredit" label="Nombre" className="mb-3">
        <Form.Control value={DataEditorial.nombre} 
        onChange={
          (event)=>{
            setDataEditorial(
              {...DataEditorial, nombre: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="direccion" label="Direccion" className="mb-3">
        <Form.Control value={DataEditorial.direccion} 
        onChange={
          (event)=>{
            setDataEditorial(
              {...DataEditorial, direccion: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="telefono" label="Telefono" className="mb-3">
        <Form.Control value={DataEditorial.telefono} 
        onChange={
          (event)=>{
            setDataEditorial(
              {...DataEditorial, telefono: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>
      <Button variant="outline-success"onClick={()=>{paquete(); urlx('../listaEdit')}} className="enviar">Enviar</Button>{' '}
      </Container>
    </>
  )
  
}
