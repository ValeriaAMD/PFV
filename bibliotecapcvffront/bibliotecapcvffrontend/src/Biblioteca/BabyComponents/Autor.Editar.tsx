import { useCallback, useState, useEffect,useContext } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IAutor } from '../Accions/Modelos/Autor.Modelo';
import Button from 'react-bootstrap/Button';
import { AutorServicio } from '../Accions/Servicios/Autor.Servicio';
import { AutorContexcto } from '../Contexts/Autor.Contexto';
import { useNavigate} from 'react-router-dom';


export const EditarAutor = () => {
  const urlx = useNavigate();
  const {refA,setrefA,IdA} = useContext(AutorContexcto)
  const [dataAutor,setDataAutor] = useState<IAutor>({
    id:0,
    nombre: 'null', 
    apellido: 'null',
    origen: 'null'

  })

  const BuscarPorID = useCallback(
    () => {
      AutorServicio.ConsultarById(IdA).then(
        (comprobar)=>{
          if(comprobar.status===200){
            setDataAutor(comprobar.data)
          }
        }
      )
    },
    [IdA],
  )
  
  useEffect(() => {
    BuscarPorID();
  
    return () => {
      
    }
  }, [IdA])
  
  const actualizacion = () =>{
    AutorServicio.Actualizar(IdA,dataAutor).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se actualizo con exito '+IdA)
          setrefA(!refA)
        }
      }
    )
  }

  return (
    <div>
<Container>
      <FloatingLabel controlId="floatingName" label="Nombre " className="mb-3">
        <Form.Control value={dataAutor.nombre} 
        onChange={
          (event)=>{
            setDataAutor(
              {...dataAutor, nombre: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingMarca" label="Apellido" className="mb-3">
        <Form.Control value={dataAutor.apellido} 
        onChange={
          (event)=>{
            setDataAutor(
              {...dataAutor, apellido: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingMarca" label="Origen" className="mb-3">
        <Form.Control value={dataAutor.origen} 
        onChange={
          (event)=>{
            setDataAutor(
              {...dataAutor, origen: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>
      
      <Button variant="outline-warning"onClick={()=>{actualizacion(); urlx('../listaAu')}} className="mb-3">Actualizar</Button>{' '}
      </Container>
    </div>
  )
}