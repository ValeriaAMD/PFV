import { createBrowserRouter } from "react-router-dom";
import { Cabecera } from "../../Cabecera";

import { ListarEjemplares } from "../BabyComponents/Ejemplares.Listar";
import { AgregarEjemplares } from "../BabyComponents/Ejemplares.Agregar";
import { EditarEjemplares } from "../BabyComponents/Ejemplares.Editar";
import { ListarEstados } from "../BabyComponents/Estados_Ejemplares.Listar";
import { AgregarEstados } from "../BabyComponents/Estados_Ejemplares.Agregar";
import { EditarEstados } from "../BabyComponents/Estados_Ejemplares.Editar";
import { ListarLibro } from "../BabyComponents/Libro.Listar";
import { AgregarLibro } from "../BabyComponents/Libro.Agregar";
import { EditarLibro } from "../BabyComponents/Libro.Editar";
import { ListarMultas } from "../BabyComponents/Multas.Listar";
import { AgregarMultas } from "../BabyComponents/Multas.Agregar";
import { EditarMultas } from "../BabyComponents/Multas.Editar";
import { ListarPrestamos } from "../BabyComponents/Prestamos.Listar";
import { AgregarPrestamos } from "../BabyComponents/Prestamos.Agregar";
import { EditarPrestamos } from "../BabyComponents/Prestamos.Editar";
import { ListarReservas } from "../BabyComponents/Reservas.Listar";
import { AgregarReservas } from "../BabyComponents/Reservas.Agregar";
import { EditarReservas } from "../BabyComponents/Reservas.Editar";
import { ListarUsuario } from "../BabyComponents/Usuario.Listar";
import { AgregarUsuario } from "../BabyComponents/Usuario.Agregar";
import { EditarUsuario } from "../BabyComponents/Usuario.Editar";
import { EjemplaresProvider } from "../Contexts/Ejemplares.Provider";
import { EstadoEjemplaresProvider } from "../Contexts/Estados_Ejemplares.Provider";
import { LibroProvider } from "../Contexts/Libro.Provider";
import { MultasProvider } from "../Contexts/Multas.Provider";
import { PrestamosProvider } from "../Contexts/Prestamos.Provider";
import { ReservasProvider } from "../Contexts/Reservas.Provider";
import { UsuariosProvider } from "../Contexts/Usuarios.Provider";
import { AutorProvider } from "../Contexts/Autor.Provider";
import { ListarAutor } from "../BabyComponents/Autor.Listar";
import { AgregarAutor } from "../BabyComponents/Autor.Agregar";
import { EditarAutor } from "../BabyComponents/Autor.Editar";
import { CategoriaProvider } from "../Contexts/Categoria.Provider";
import { ListarCategoria } from "../BabyComponents/Categoria.Listar";
import { AgregarCategoria } from "../BabyComponents/Categoria.Agregar";
import { EditarCategoria } from "../BabyComponents/Categoria.Editar";
import { EditorialProvider } from "../Contexts/Editorial.Provider";
import { ListarEditorial } from "../BabyComponents/Editorial.Listar";
import { AgregarEditorial } from "../BabyComponents/Editorial.Agregar";
import { EditarEditorial } from "../BabyComponents/Editorial.Editar";
import { PrProvider } from "../Contexts/PrProvider";
import { HomeHome } from "../Home";




export const ruta = createBrowserRouter(
    [
        
 
        {
            path: 'inicio/*',
            element: <Cabecera/>,
            children:[
               

                {
                path:'listaEjem',
                element: <EjemplaresProvider><ListarEjemplares/></EjemplaresProvider>
                },
                {
                    path: 'agregarEjem',
                    element: <EjemplaresProvider><AgregarEjemplares/></EjemplaresProvider>
                },
                {
                    path: 'editarEjem',
                    element: <EjemplaresProvider><EditarEjemplares/></EjemplaresProvider>
                }
                     
        ,


         {
                path:'listaEsta',
                element: <EstadoEjemplaresProvider><ListarEstados/></EstadoEjemplaresProvider>
                },
                {
                    path: 'agregarEsta',
                    element: <EstadoEjemplaresProvider><AgregarEstados/></EstadoEjemplaresProvider>
                },
                {
                    path: 'editarEsta',
                    element: <EstadoEjemplaresProvider><EditarEstados/></EstadoEjemplaresProvider>
                }
                     
        ,


                {
                path:'listaL',
                element: <LibroProvider><ListarLibro/></LibroProvider>
                },
                {
                    path: 'agregarL',
                    element: <LibroProvider><AgregarLibro/></LibroProvider>
                },
                {
                    path: 'editarL',
                    element: <LibroProvider><EditarLibro/></LibroProvider>
                }
                     
        ,


                {
                path:'listaM',
                element: <MultasProvider><ListarMultas/></MultasProvider>
                },
                {
                    path: 'agregarM',
                    element: <MultasProvider><AgregarMultas/></MultasProvider>
                },
                {
                    path: 'editarM',
                    element: <MultasProvider><EditarMultas/></MultasProvider>
                }
                     
        ,

        

                {
                path:'listaP',
                element: <PrestamosProvider><ListarPrestamos/></PrestamosProvider>
                },
                {
                    path: 'agregarP',
                    element: <PrestamosProvider><AgregarPrestamos/></PrestamosProvider>
                },
                {
                    path: 'editarP',
                    element: <PrestamosProvider><EditarPrestamos/></PrestamosProvider>
                }
                     
        ,

        

                {
                path:'listaR',
                element: <ReservasProvider><ListarReservas/></ReservasProvider>
                },
                {
                    path: 'agregarR',
                    element: <ReservasProvider><AgregarReservas/></ReservasProvider>
                },
                {
                    path: 'editarR',
                    element: <ReservasProvider><EditarReservas/></ReservasProvider>
                }
                     
        ,

        {
            path:'listaAu',
            element: <AutorProvider><ListarAutor/></AutorProvider>
            },
            {
                path: 'agregarAu',
                element: <AutorProvider><AgregarAutor/></AutorProvider>
            },
            {
                path: 'editarAu',
                element: <AutorProvider><EditarAutor/></AutorProvider>
            }
                 
    ,

        

                {
                path:'listaU',
                element: <UsuariosProvider><ListarUsuario/></UsuariosProvider>
                },
                {
                    path: 'agregarU',
                    element: <UsuariosProvider><AgregarUsuario/></UsuariosProvider>
                },
                {
                    path: 'editarU',
                    element: <UsuariosProvider><EditarUsuario/></UsuariosProvider>
                }
                     ,

                     
                {
                    path:'listaCate',
                    element: <CategoriaProvider><ListarCategoria/></CategoriaProvider>
                    },
                    {
                        path: 'agregarCate',
                        element: <CategoriaProvider><AgregarCategoria/></CategoriaProvider>
                    },
                    {
                        path: 'editarCate',
                        element: <CategoriaProvider><EditarCategoria/></CategoriaProvider>
                    }
                    ,
                    
                {
                    path:'listaEdit',
                    element: <EditorialProvider><ListarEditorial/></EditorialProvider>
                    },
                    {
                        path: 'agregarEdit',
                        element: <EditorialProvider><AgregarEditorial/></EditorialProvider>
                    },
                    {
                        path: 'editarEdit',
                        element: <EditorialProvider><EditarEditorial/></EditorialProvider>
                    }
        ,
        {
            path:'Home',
            element: <PrProvider><HomeHome/></PrProvider>
            }
            ]
        }
    ]


    
)