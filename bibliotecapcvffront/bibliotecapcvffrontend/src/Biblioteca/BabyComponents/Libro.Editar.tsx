import { useCallback, useState, useEffect,useContext } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { ILibro } from '../Accions/Modelos/Libro.Modelo';
import Button from 'react-bootstrap/Button';
import { LibroServicio } from '../Accions/Servicios/Libro.Servicio';
import { LibroContexto } from '../Contexts/Libro.Contexto';
import { useNavigate} from 'react-router-dom';


export const EditarLibro = () => {
  const urlx = useNavigate();
  const {refL,setrefL,IdL} = useContext(LibroContexto)
  const[DataLibros,setDataLibros] = useState<ILibro>({
    id:0,
    titulo: 'null', 
    isbn: 0,
    autor_id:0,
    editorial_id:0,
    categoria_id:0

  })
  
  const BuscarPorID = useCallback(
    () => {
   
      LibroServicio.ConsultarById(IdL).then(
        (comprobar)=>{
          if(comprobar.status===200){
            setDataLibros(comprobar.data)
          }
        }
      )
    },
    [IdL],
  )
  
  useEffect(() => {
    BuscarPorID();

    return () => {
      
    }
  }, [IdL])
  
  const actualizacion = () =>{
    LibroServicio.Actualizar(IdL,DataLibros).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se actualizo con exito '+IdL)
          setrefL(!refL)
        }
      }
    )
  }

  return (
    <div>
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

      <FloatingLabel controlId="floatingStock" label="ISBN" className="mb-3">
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
      
      <Button variant="outline-warning"onClick={()=>{actualizacion(); urlx('../listaL')}} className="mb-3">
        Actualizar</Button>{' '}
      </Container>
    </div>
  )
}