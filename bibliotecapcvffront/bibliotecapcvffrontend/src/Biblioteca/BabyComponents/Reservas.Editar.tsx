import { useCallback, useState, useEffect,useContext } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IReservas } from '../Accions/Modelos/Reservas.Modelo';
import Button from 'react-bootstrap/Button';
import { ReservasContexto } from '../Contexts/Reservas.Contexto';
import { ReservasServicio } from '../Accions/Servicios/Reservas.Servicio';
import { useNavigate} from 'react-router-dom';


export const EditarReservas = () => {
  const urlx = useNavigate();
  const {refR,setrefR,IdR} = useContext(ReservasContexto)
  const[DataReservas,setDataReservas] = useState<IReservas>({
    id:0,
    fecha_reserva: 'null',
    usuario_id:0,
    ejemplar_id:0

  })
  
  const paquete = () =>{
    ReservasServicio.Guardar(DataReservas).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se Edito con exito '+DataReservas.id)
          setrefR(!refR)
        }
      }
    )
  }

  const BuscarPorID = useCallback(
    () => {
      ReservasServicio.ConsultarById(IdR).then(
        (comprobar)=>{
          if(comprobar.status===200){
            setDataReservas(comprobar.data)
          }
        }
      )
    },
    [IdR],
  )
  
  useEffect(() => {
    BuscarPorID();
  
    return () => {
      
    }
  }, [IdR])
  
  const actualizacion = () =>{
    ReservasServicio.Actualizar(IdR,DataReservas).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se actualizo con exito '+IdR)
          setrefR(!refR)
        }
      }
    )
  }

  return (
    <div>
<Container>
      <FloatingLabel controlId="floatingName" label="Fecha de reserva" className="mb-3">
        <Form.Control value={DataReservas.fecha_reserva} 
        onChange={
          (event)=>{
            setDataReservas(
              {...DataReservas, fecha_reserva: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingStock" label="Usuario" className="mb-3">
        <Form.Control value={DataReservas.usuario_id} type='number'
        onChange={
          (event)=>{
            setDataReservas(
              {...DataReservas, usuario_id: +event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingStock" label="Ejemplar" className="mb-3">
        <Form.Control value={DataReservas.ejemplar_id} type='number'
        onChange={
          (event)=>{
            setDataReservas(
              {...DataReservas, ejemplar_id: +event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <Button variant="outline-warning"onClick={()=>{actualizacion(); urlx('../listaR')}} className="mb-3">Actualizar</Button>{' '}
      </Container>
    </div>
  )
}