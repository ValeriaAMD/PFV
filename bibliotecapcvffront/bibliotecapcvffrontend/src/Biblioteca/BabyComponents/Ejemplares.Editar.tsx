import { useCallback, useState, useEffect,useContext } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IEjemplares } from '../Accions//Modelos/Ejemplares.Modelo';
import Button from 'react-bootstrap/Button';
import { EjemplaresServicio } from '../Accions/Servicios/Ejemplares.Servicio';
import { EjemplaresContexto } from '../Contexts/Ejemplares.Contexto';
import { useNavigate} from 'react-router-dom';


export const EditarEjemplares = () => {
  const urlx = useNavigate();
  const {refEjm,setrefEjm,IdEjm} = useContext(EjemplaresContexto)
  const[dataEjemplares,setDataEjemplares] = useState<IEjemplares>({
    id:0,
    libro_id:0,
    estado_id:0

  })
  
  const paquete = () =>{
    EjemplaresServicio.Guardar(dataEjemplares).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se Edito con exito '+dataEjemplares.id)
          setrefEjm(!refEjm)
        }
      }
    )
  }

  const BuscarPorID = useCallback(
    () => {
      EjemplaresServicio.ConsultarById(IdEjm).then(
        (comprobar)=>{
          if(comprobar.status===200){
            setDataEjemplares(comprobar.data)
          }
        }
      )
    },
    [IdEjm],
  )
  
  useEffect(() => {
    BuscarPorID();
  
    return () => {
      
    }
  }, [IdEjm])
  
  const actualizacion = () =>{
    EjemplaresServicio.Actualizar(IdEjm,dataEjemplares).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se actualizo con exito '+IdEjm)
          setrefEjm(!refEjm)
        }
      }
    )
  }

  return (
    <div>
<Container>
<FloatingLabel controlId="floatingStock" label="Libro" className="mb-3">
   <Form.Control value={dataEjemplares.libro_id} type='number'
   onChange={
     (event)=>{
       setDataEjemplares(
         {...dataEjemplares, libro_id: +event.target.value}
       )
     }
   }
   />
 </FloatingLabel>

 <FloatingLabel controlId="floatingStock" label="Estado" className="mb-3">
   <Form.Control value={dataEjemplares.estado_id} type='number'
   onChange={
     (event)=>{
       setDataEjemplares(
         {...dataEjemplares, estado_id: +event.target.value}
       )
     }
   }
   />
 </FloatingLabel>
 </Container>
      <Button variant="outline-warning"onClick={()=>{actualizacion(); urlx('../listaEjem')}} className="mb-3">Actualizar</Button>{' '}

    </div>
  )
}