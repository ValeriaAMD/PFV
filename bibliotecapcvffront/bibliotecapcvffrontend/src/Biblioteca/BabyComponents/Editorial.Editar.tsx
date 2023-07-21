import { useCallback, useState, useEffect,useContext } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IEditorial } from '../Accions/Modelos/Editorial.Modelo';
import Button from 'react-bootstrap/Button';
import { EditorialServicio } from '../Accions/Servicios/Editorial.Servicio';
import { EditorialContexto } from '../Contexts/Editorial.Contexto';
import { useNavigate} from 'react-router-dom';


export const EditarEditorial = () => {
  const urlx = useNavigate();
  const {refEd,setrefEd,IdEd} = useContext(EditorialContexto)
  const[DataEditorial,setDataEditorial] = useState<IEditorial>({
    id:0,
    nombre: 'null', 
    direccion: 'null',
    telefono: 'null'

  })
  
  const paquete = () =>{
    EditorialServicio.Guardar(DataEditorial).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se Edito con exito '+DataEditorial.nombre)
          setrefEd(!refEd)
        }
      }
    )
  }

  const BuscarPorID = useCallback(
    () => {
      EditorialServicio.ConsultarById(IdEd).then(
        (comprobar)=>{
          if(comprobar.status===200){
            setDataEditorial(comprobar.data)
          }
        }
      )
    },
    [IdEd],
  )
  
  useEffect(() => {
    BuscarPorID();
  
    return () => {
      
    }
  }, [IdEd])
  
  const actualizacion = () =>{
    EditorialServicio.Actualizar(IdEd,DataEditorial).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se actualizo con exito '+IdEd)
          setrefEd(!refEd)
        }
      }
    )
  }

  return (
    <div>
<Container>
      <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
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

      <FloatingLabel controlId="floatingMarca" label="Direccion" className="mb-3">
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

      <FloatingLabel controlId="floatingMarca" label="Telefono" className="mb-3">
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
      
      <Button variant="outline-warning"onClick={()=>{actualizacion(); urlx('../listaEdit')}} className="mb-3">Actualizar</Button>{' '}
      </Container>
    </div>
  )
}