import React, { useState, useCallback, useEffect, useContext } from 'react'
import { Table, Button, Container } from 'react-bootstrap'
import { ILibro } from '../Accions/Modelos/Libro.Modelo'
import { LibroContexto } from '../Contexts/Libro.Contexto'
import { LibroServicio } from '../Accions/Servicios/Libro.Servicio'
import { useNavigate } from 'react-router-dom'

export const ListarLibro = () => {
  const urlx = useNavigate();
  const { refL, setrefL, setIdL } = useContext(LibroContexto)
  const EliminarL = useCallback(
    (idelet: number) => {

      LibroServicio.Eliminar(idelet).then(
        (correct) => {      debugger;
          if (correct.status === 200) {
            alert("Se elimino el id: " + idelet)
            setrefL(!refL)
          }
        }
      )
    },
    [refL],
  )

  const [Id, setId] = useState(0)
  const [dataLibro, setDataLibro] = useState<[ILibro]>()
  const BuscarTodos = useCallback(
    () => {
      LibroServicio.Consultar().then(
        (apro) => {
          if (apro.status === 200) {
            setDataLibro(apro.data)
          }

        }
      ).catch(
        (error) => {
          alert(error)
        }
      )
    },

    [refL],
  )
  useEffect(() => {
    BuscarTodos()
    return () => {

    }
  }, [refL])



  return (
    <div>
      <h1>Libro:</h1>
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Isbn</th>
              <th>Id Autor</th>
              <th>Id Editorial</th>
              <th>Id Categoria</th>
              <th>         </th>
              <th>          </th>
            </tr>
          </thead>
          <tbody>
            {
              dataLibro && dataLibro?.map(
                (libro, i) => (
                  <tr key={i}>
                    <td>
                      {libro.id}
                    </td>
                    <td>
                      {libro.titulo}
                    </td>
                    <td>
                      {libro.isbn}
                    </td>
                    <td>
                      {libro.autor_id}
                    </td>
                    <td>
                      {libro.editorial_id}
                    </td>
                    <td>
                      {libro.categoria_id}
                    </td>



                    <td>
                      <center>
                        <Button variant="warning"
                          onClick={() => { setIdL(libro.id); urlx('../editarL') }}
                        >Editar</Button>{' '}
                      </center>
                    </td>
                    <td>
                      <center>
                        <Button variant="danger"
                          onClick={() => { EliminarL(libro.id) }}
                        >Eliminar</Button>{' '}
                      </center>
                    </td>
                  </tr>
                )
              )
            }
          </tbody>
        </Table>
      </Container>

    </div>
  )


}
