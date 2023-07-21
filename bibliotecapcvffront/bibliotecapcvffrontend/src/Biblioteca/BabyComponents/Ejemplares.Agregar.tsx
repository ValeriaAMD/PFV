import { useContext, useState } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IEjemplares } from '../Accions/Modelos/Ejemplares.Modelo';
import Button from 'react-bootstrap/Button';
import { EjemplaresServicio } from '../Accions/Servicios/Ejemplares.Servicio';
import { EjemplaresContexto } from '../Contexts/Ejemplares.Contexto';
import { useNavigate} from 'react-router-dom';


export const AgregarEjemplares = () => {
  const urlx = useNavigate();
  const {refEjm,setrefEjm} = useContext(EjemplaresContexto)
  const [dataEjemplares,setDataEjemplares] = useState<IEjemplares>({
    id:0,
    libro_id:0,
    estado_id:0

  })
  
  const paquete = () =>{
    EjemplaresServicio.Guardar(dataEjemplares).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se registro con exito '+dataEjemplares.id)
          setrefEjm(!refEjm)
        }
      }
    ).catch(error => {console.error(error);
      alert('Los datos  que intenta agregar en libro y estado puede que no existen, intente con uno que ya hs sido agregado');
    }); 
  }


  return (
    <>
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

      <Button variant="outline-success"onClick={()=>{paquete(); urlx('../listaEjem')}} className="mb-3">Enviar</Button>{' '}
      </Container>
    </>
  )
  
}
