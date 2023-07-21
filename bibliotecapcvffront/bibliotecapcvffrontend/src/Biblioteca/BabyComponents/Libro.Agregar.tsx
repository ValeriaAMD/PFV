import { useContext, useState } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { ILibro } from '../Accions/Modelos/Libro.Modelo';
import Button from 'react-bootstrap/Button';
import { LibroServicio } from '../Accions/Servicios/Libro.Servicio';
import { LibroContexto } from '../Contexts/Libro.Contexto';
import { useNavigate} from 'react-router-dom';


export const AgregarLibro = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const urlx = useNavigate();
  const {refL,setrefL} = useContext(LibroContexto)
  const [DataLibros,setDataLibros] = useState<ILibro>({
    
    id:0,
    titulo: 'null', 
    isbn: 0,
    autor_id:0,
    editorial_id:0,
    categoria_id:0

  })
  
  const paquete = () =>{
      LibroServicio.Guardar(DataLibros).then(
        
        (larespuesta) => {
          if (larespuesta.status == 200){
            alert('Se registro con exito '+DataLibros.titulo)
            setrefL(!refL)
          }
        }
      ) .catch(error => {console.error(error);
        alert('Los datos  que intenta agregar en autor, categoria o editorial puede que no existen, intente con uno que ya hs sido agregado');
      });  
  };

  return (
    <>

<Container>
      <FloatingLabel controlId="floatingName" label="Titulo" className="mb-3">
        <Form.Control value={DataLibros.titulo} 
        onChange={
          (event)=>{
            setDataLibros(
              {...DataLibros, titulo: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingFechadealta" label=" ISBN " className="mb-3">
        <Form.Control value={DataLibros.isbn} type='number'
        onChange={
          (event)=>{
            setDataLibros(
              {...DataLibros, isbn: +event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingFechadealta" label="Autor" className="mb-3">
        <Form.Control value={DataLibros.autor_id} type='number'
        onChange={
          (event)=>{
            setDataLibros(
              {...DataLibros, autor_id: +event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingFechadealta" label="Editorial" className="mb-3">
        <Form.Control value={DataLibros.editorial_id} type='number'
        onChange={
          (event)=>{
            setDataLibros(
              {...DataLibros, editorial_id: +event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingFechadealta" label="Categoria" className="mb-3">
        <Form.Control value={DataLibros.categoria_id} type='number'
        onChange={
          (event)=>{
            setDataLibros(
              {...DataLibros, categoria_id: +event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <Button variant="outline-success"onClick={()=>{paquete(); urlx('../listaL')}} className="mb-3">Enviar</Button>{' '}
      </Container>
      
    </>
  )
  
}
