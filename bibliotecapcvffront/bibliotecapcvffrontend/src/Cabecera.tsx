import React from'react'
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Outlet, useNavigate} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Cabecera = () => {
    const urlx = useNavigate();
  return (
    <>
    <Navbar bg="warning" data-bs-theme="dark">
        <Container>
        <Navbar.Brand>Biblioteca ITPA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>urlx('Home')}>Home</Nav.Link>
          </Nav>
        <NavDropdown title="Libros" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <Nav.Link onClick={()=>urlx('agregarL')}>Agregar Libro</Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
            <Nav.Link onClick={()=>urlx('listaL')}>Listar Libro</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
        <Container>
        <NavDropdown title="Autores" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Nav.Link onClick={()=>urlx('agregarAu')}>Agregar Autor</Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link onClick={()=>urlx('listaAu')}>Listar Autor</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
        <Container>
        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Nav.Link onClick={()=>urlx('agregarCate')}>Agregar Categoria</Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link onClick={()=>urlx('listaCate')}>Listar Categoria</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
        <Container>
        <NavDropdown title="Editoriales" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Nav.Link onClick={()=>urlx('agregarEdit')}>Agregar Editorial</Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link onClick={()=>urlx('listaEdit')}>Listar Editorial</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
        <Container>
        <NavDropdown title="Ejemplares" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Nav.Link onClick={()=>urlx('agregarEjem')}>Agregar Ejemplar</Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link onClick={()=>urlx('listaEjem')}>Listar Ejemplar</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
        <Container>
        <NavDropdown title="Estado de Ejemplar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Nav.Link onClick={()=>urlx('agregarEsta')}>Agregar Estado</Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link onClick={()=>urlx('listaEsta')}>Listar Estado</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
        <Container>
        <NavDropdown title="Prestamos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Nav.Link onClick={()=>urlx('agregarP')}>Agregar Prestamo</Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link onClick={()=>urlx('listaP')}>Listar Prestamo</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
        <Container>
        <NavDropdown title="Reservas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Nav.Link onClick={()=>urlx('agregarR')}>Agregar Reservas</Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link onClick={()=>urlx('listaR')}>Listar Reservas</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
        <Container>
        <NavDropdown title="Multas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Nav.Link onClick={()=>urlx('agregarM')}>Agregar Multas</Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link onClick={()=>urlx('listaM')}>Listar Multas</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
        <Container>
        <NavDropdown title="Usuario" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Nav.Link onClick={()=>urlx('agregarU')}>Agregar Usuario</Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link onClick={()=>urlx('listaU')}>Listar Usuario</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
        </Container>

        
      </Navbar>
        <br/>
        <Outlet/>
    </>
  )
}
 