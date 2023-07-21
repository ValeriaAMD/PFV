import { useCallback, useState, useEffect,useContext } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IEstadosEjemplares } from '../Accions/Modelos/Estados_Ejemplares.Modelo';
import Button from 'react-bootstrap/Button';
import { EstadoEjemplaresContexto } from '../Contexts/Estados_Ejemplares.Contexto'
import { EstadosEjemplaresServicio } from '../Accions/Servicios/Estados_Ejemplares.Servicio'
import { useNavigate} from 'react-router-dom';


export const EditarEstados = () => {
  const urlx = useNavigate();
  const {refEjmES,setrefEjmES,IdEjmES} = useContext(EstadoEjemplaresContexto)
  const[DataEsEjemplares,setDataEsEjemplares] = useState<IEstadosEjemplares>({
    id:0,
    nombre: 'null', 
    descripcion: 'null'

  })
  
  const paquete = () =>{
    EstadosEjemplaresServicio.Guardar(DataEsEjemplares).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se Edito con exito '+DataEsEjemplares.nombre)
          setrefEjmES(!refEjmES)
        }
      }
    )
  }

  const BuscarPorID = useCallback(
    () => {
      EstadosEjemplaresServicio.ConsultarById(IdEjmES).then(
        (comprobar)=>{
          if(comprobar.status===200){
            setDataEsEjemplares(comprobar.data)
          }
        }
      )
    },
    [IdEjmES],
  )
  
  useEffect(() => {
    BuscarPorID();
  
    return () => {
      
    }
  }, [IdEjmES])
  
  const actualizacion = () =>{
    EstadosEjemplaresServicio.Actualizar(IdEjmES,DataEsEjemplares).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se actualizo con exito '+IdEjmES)
          setrefEjmES(!refEjmES)
        }
      }
    )
  }

  return (
    <div>
<Container>
      <FloatingLabel controlId="floatingName" label="Nombre " className="mb-3">
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

      <FloatingLabel controlId="floatingMarca" label="descripcion" className="mb-3">
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
      
      <Button variant="outline-warning"onClick={()=>{actualizacion(); urlx('../listaEsta')}} className="mb-3">Actualizar</Button>{' '}
      </Container>
    </div>
  )
}