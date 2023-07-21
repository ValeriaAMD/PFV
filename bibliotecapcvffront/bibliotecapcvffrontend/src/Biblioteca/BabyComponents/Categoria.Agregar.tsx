import { useContext, useState } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { ICategoria } from '../Accions/Modelos/Categoria.Modelo';
import Button from 'react-bootstrap/Button';
import { CategoriaServicio } from '../Accions/Servicios/Categoria.Servicio';
import { CategoriaContexto } from '../Contexts/Categoria.Contexto';
import { useNavigate} from 'react-router-dom';


export const AgregarCategoria = () => {
  const urlx = useNavigate();
  const {refC,setrefC} = useContext(CategoriaContexto)
  const [dataCategoria,setdataCategoria] = useState<ICategoria>({
    id:0,
    nombre: 'null', 
    descripcion: 'null'

  })
  
  const paquete = () =>{
    CategoriaServicio.Guardar(dataCategoria).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se registro con exito '+dataCategoria.nombre)
          setrefC(!refC)
        }
      }
    )
  }


  return (
    <>
<Container>
      <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
        <Form.Control value={dataCategoria.nombre} 
        onChange={
          (event)=>{
            setdataCategoria(
              {...dataCategoria, nombre: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingMarca" label="Descripcion" className="mb-3">
        <Form.Control value={dataCategoria.descripcion} 
        onChange={
          (event)=>{
            setdataCategoria(
              {...dataCategoria, descripcion: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <Button variant="outline-success"onClick={()=>{paquete(); urlx('../listaCate')}} className="mb-3">Enviar</Button>{' '}
      </Container>
    </>
  )
  
}
