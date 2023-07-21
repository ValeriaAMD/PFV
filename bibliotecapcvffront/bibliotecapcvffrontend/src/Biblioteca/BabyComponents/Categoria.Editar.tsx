import React, { useCallback, useState, useEffect,useContext } from 'react'
import {Container, FloatingLabel} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { ICategoria } from '../Accions/Modelos/Categoria.Modelo';
import Button from 'react-bootstrap/Button';
import { CategoriaServicio } from '../Accions/Servicios/Categoria.Servicio';
import { CategoriaContexto } from '../Contexts/Categoria.Contexto';
import { useNavigate} from 'react-router-dom';


export const EditarCategoria = () => {
  const urlx = useNavigate();
  const {refC,setrefC,IdC} = useContext(CategoriaContexto)
  const[DataCategoria,setDataCategoria] = useState<ICategoria>({
    id:0,
    nombre: 'null', 
    descripcion: 'null'
  })
  
  const paquete = () =>{
    CategoriaServicio.Guardar(DataCategoria).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se Edito con exito '+DataCategoria.nombre)
          setrefC(!refC)
        }
      }
    )
  }

  const BuscarPorID = useCallback(
    () => {
      CategoriaServicio.ConsultarById(IdC).then(
        (comprobar)=>{
          if(comprobar.status===200){
            setDataCategoria(comprobar.data)
          }
        }
      )
    },
    [IdC],
  )
  
  useEffect(() => {
    BuscarPorID();
  
    return () => {
      
    }
  }, [IdC])
  
  const actualizacion = () =>{
    CategoriaServicio.Actualizar(IdC,DataCategoria).then(
      (larespuesta) => {
        if (larespuesta.status == 200){
          alert('Se actualizo con exito '+IdC)
          setrefC(!refC)
        }
      }
    )
  }

  return (
    <div>
<Container>
      <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
        <Form.Control value={DataCategoria.nombre} 
        onChange={
          (event)=>{
            setDataCategoria(
              {...DataCategoria, nombre: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingMarca" label="Descripcion" className="mb-3">
        <Form.Control value={DataCategoria.descripcion} 
        onChange={
          (event)=>{
            setDataCategoria(
              {...DataCategoria, descripcion: event.target.value}
            )
          }
        }
        />
      </FloatingLabel>

      <Button variant="outline-warning"onClick={()=>{actualizacion(); urlx('../listaCate')}} className="mb-3">Actualizar</Button>{' '}
      </Container>
    </div>
  )
}