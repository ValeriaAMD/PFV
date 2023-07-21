import { useContext, useState } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { IAutor } from '../Accions/Modelos/Autor.Modelo';
import Button from 'react-bootstrap/Button';
import { AutorServicio } from '../Accions/Servicios/Autor.Servicio';
import { AutorContexcto } from '../Contexts/Autor.Contexto';
import { useNavigate} from 'react-router-dom';


export const AgregarAutor = () => {
  const urlx = useNavigate();
  const {refA,setrefA} = useContext(AutorContexcto)
  const [dataAutor,setDataAutor] = useState<IAutor>({
    id:0,
    nombre: 'null', 
    apellido: 'null',
    origen: 'null'

  })
  
  const paquete = () =>{
    AutorServicio.Guardar(dataAutor).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se registro con exito '+dataAutor.nombre)
          setrefA(!refA)
        }
      }
    )
  }


  return (
    <>
<Container>
      <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
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

      <FloatingLabel controlId="floatingMarca" label="Apellidos" className="mb-3">
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

      <FloatingLabel controlId="floatingMarca" label="Origien" className="mb-3">
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
      <Button variant="outline-success"onClick={()=>{paquete(); urlx('../listaAutro')}} className="mb-3">Enviar</Button>{' '}
      </Container>
    </>
  )
  
}
