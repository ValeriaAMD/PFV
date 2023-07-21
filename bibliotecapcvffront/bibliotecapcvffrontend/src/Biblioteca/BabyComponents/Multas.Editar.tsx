import { useCallback, useState, useEffect,useContext } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IMultas } from '../Accions/Modelos/Multas.Modelo';
import Button from 'react-bootstrap/Button';
import { MultasContexto } from '../Contexts/Multas.Contexto';
import { MultasServicio } from '../Accions/Servicios/Multas.Servicio';
import { useNavigate} from 'react-router-dom';


export const EditarMultas = () => {
  const urlx = useNavigate();
  const {refM,setrefM,IdM} = useContext(MultasContexto)
  const[DataMultas,setDataMultas] = useState<IMultas>({
    id:0,
    monto: 'null', 
    fecha_pago: 'null',
    prestamo_id: 0

  })
  
 

  const BuscarPorID = useCallback(
    () => {
      MultasServicio.ConsultarById(IdM).then(
        (comprobar)=>{
          if(comprobar.status===200){
            setDataMultas(comprobar.data)
          }
        }
      )
    },
    [IdM],
  )
  
  useEffect(() => {
    BuscarPorID();
  
    return () => {
      
    }
  }, [IdM])
  
  const actualizacion = () =>{
    MultasServicio.Actualizar(IdM,DataMultas).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se actualizo con exito '+IdM)
          setrefM(!refM)
        }
      }
    )
  }

  return (
    <div>
<Container>
      <FloatingLabel controlId="floatingName" label="Monto" className="mb-3">
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

      <FloatingLabel controlId="floatingMarca" label="Fecha de pago" className="mb-3">
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
      <FloatingLabel controlId="floatingFechadealta" label="Prestamo" className="mb-3">
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
      
      <Button variant="outline-warning"onClick={()=>{actualizacion(); urlx('../listaM')}} className="mb-3">Actualizar</Button>{' '}
      </Container>
    </div>
  )
}