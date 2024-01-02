import { useContext, useState } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IMultas } from '../Accions/Modelos/Multas.Modelo';
import Button from 'react-bootstrap/Button';
import { MultasContexto } from '../Contexts/Multas.Contexto';
import { MultasServicio } from '../Accions/Servicios/Multas.Servicio';
import { useNavigate} from 'react-router-dom';


export const AgregarMultas = () => {
  const urlx = useNavigate();
  const {refM,setrefM} = useContext(MultasContexto)
  const [DataMultas,setDataMultas] = useState<IMultas>({
    id:0,
    monto: '', 
    fecha_pago: '',
    prestamo_id: 0

  })
  
  const paquete = () =>{
    MultasServicio.Guardar(DataMultas).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se registro con exito '+DataMultas.id)
          setrefM(!refM)
        }
      }
    ).catch(error => {console.error(error);
      alert('Los datos  que intenta agregar en prestamo puede que no existen, intente con uno que ya hs sido agregado');
    }); 
  }


  return (
    <>
<Container>
      <FloatingLabel controlId="monto" label="Monto" className="mb-3">
        <Form.Control value={DataMultas.monto} 
        onChange={
          (event)=>{
            setDataMultas(
              {...DataMultas, monto: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="fechaP" label="Fecha de pago " className="mb-3">
        <Form.Control value={DataMultas.fecha_pago} 
        onChange={
          (event)=>{
            setDataMultas(
              {...DataMultas, fecha_pago: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="prest" label="Prestamo" className="mb-3">
        <Form.Control value={DataMultas.prestamo_id} type='number'
        onChange={
          (event)=>{
            setDataMultas(
              {...DataMultas, prestamo_id: +event.target.value}
            )
          }
        }
        />
      </FloatingLabel>
      
      <Button variant="outline-success"onClick={()=>{paquete(); urlx('../listaM')}} className="enviar">Enviar</Button>{' '}
      </Container>
    </>
  )
  
}