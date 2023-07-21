import { useContext, useState } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IPrestamos } from '../Accions/Modelos/Prestamos.Modelo';
import Button from 'react-bootstrap/Button';
import { PrestamosServicio } from '../Accions/Servicios/Prestamos.Servicio'; 
import { PrestamosContexto } from '../Contexts/Prestamos.Contexto'; 
import { useNavigate} from 'react-router-dom';


export const AgregarPrestamos = () => {
  const urlx = useNavigate();
  const {refP,setrefP} = useContext(PrestamosContexto)
  const [dataPrestamos,setDataPrestamos] = useState<IPrestamos>({
    id:0,
    fecha_prestamo: 'null',
    usuario_id:0,
    ejemplar_id:0
  })
  
  const paquete = () =>{
    PrestamosServicio.Guardar(dataPrestamos).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se registro con exito '+dataPrestamos.id)
          setrefP(!refP)
        }
      }
    ).catch(error => {console.error(error);
      alert('Los datos  que intenta agregar en usuario o ejemplar puede que no existen, intente con uno que ya hs sido agregado');
    }); 
  }


  return (
    <>
<Container>
      <FloatingLabel controlId="floatingName" label="Fecha de prestamo" className="mb-3">
        <Form.Control value={dataPrestamos.fecha_prestamo} 
        onChange={
          (event)=>{
            setDataPrestamos(
              {...dataPrestamos, fecha_prestamo: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingStock" label="Usuario" className="mb-3">
   <Form.Control value={dataPrestamos.usuario_id} type='number'
   onChange={
     (event)=>{
      setDataPrestamos(
         {...dataPrestamos, usuario_id: +event.target.value}
       )
     }
   }
   />
 </FloatingLabel>

 <FloatingLabel controlId="floatingStock" label="Ejemplar" className="mb-3">
   <Form.Control value={dataPrestamos.ejemplar_id} type='number'
   onChange={
     (event)=>{
      setDataPrestamos(
         {...dataPrestamos, ejemplar_id: +event.target.value}
       )
     }
   }
   />
 </FloatingLabel>

      <Button variant="outline-success"onClick={()=>{paquete(); urlx('../listaP')}} className="mb-3">Enviar</Button>{' '}
      </Container>
    </>
  )
  
}