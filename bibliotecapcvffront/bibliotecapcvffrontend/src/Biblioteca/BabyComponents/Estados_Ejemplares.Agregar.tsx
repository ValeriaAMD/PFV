import { useContext, useState } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IEstadosEjemplares } from '../Accions/Modelos/Estados_Ejemplares.Modelo';
import Button from 'react-bootstrap/Button';
import { EstadosEjemplaresServicio } from '../Accions/Servicios/Estados_Ejemplares.Servicio';
import { EstadoEjemplaresContexto } from '../Contexts/Estados_Ejemplares.Contexto';
import { useNavigate} from 'react-router-dom';


export const AgregarEstados = () => {
  const urlx = useNavigate();
  const {refEjmES,setrefEjmES} = useContext(EstadoEjemplaresContexto)
  const [DataEsEjemplares,setDataEsEjemplares] = useState<IEstadosEjemplares>({
    id:0,
    nombre: '', 
    descripcion: ''
  })
  
  const paquete = () =>{
    EstadosEjemplaresServicio.Guardar(DataEsEjemplares).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se registro con exito '+DataEsEjemplares.nombre)
          setrefEjmES(!refEjmES)
        }
      }
    )
  }


  return (
    <>
<Container>
      <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
        <Form.Control value={DataEsEjemplares.nombre} 
        onChange={
          (event)=>{
            setDataEsEjemplares(
              {...DataEsEjemplares, nombre: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="descrip" label="Descripcion" className="mb-3">
        <Form.Control value={DataEsEjemplares.descripcion} 
        onChange={
          (event)=>{
            setDataEsEjemplares(
              {...DataEsEjemplares, descripcion: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>
      
      <Button variant="outline-success"onClick={()=>{paquete(); urlx('../listaEsta')}} className="mb-3">Enviar</Button>{' '}
      </Container>
    </>
  )
  
}
