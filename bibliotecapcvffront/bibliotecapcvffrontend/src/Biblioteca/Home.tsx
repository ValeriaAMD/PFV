import React from  'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useState,useCallback,useEffect,useContext } from 'react';
import { IPrincipal } from './Accions/Servicios/Principal.Servicio';
import { PrincipalContexto } from './Contexts/PrincipalContexto';
import ReactPlayer from 'react-player';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';

interface ImenuContexto{
  IdPri:number,
  setIdPri:React.Dispatch<React.SetStateAction<boolean>>
  iniciar:boolean,
  setiniciar:React.Dispatch<React.SetStateAction<number>>
}

export const HomeHome = () => {
const {iniciar,setIdPri,IdPri,setiniciar} = useContext(PrincipalContexto)
const urlx=useNavigate();
const [dataPr,setDataPr] = useState<IPrincipal>({
  principal:'null'

  })


return (
   <center>
<Container>
    <ReactPlayer
url={require('./video/Lectura.mp4')}
width={'50%'}
height={'50%'}
playing
controls
loop
/>


</Container>
<br/>
<br/>
<Container>
<CardGroup>
      <Card border="warning" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>PRESENTACIÓN</Card.Title>
          <Card.Text>
          Nos complace presentar WebWorks, una compañía que 
          ofrece servicio web de alta calidad que satisfacen las necesidades y 
          expectativas de nuestros clientes.
          </Card.Text>
        </Card.Body>
        <Card.Footer >
          <small className="text-muted">W</small>
        </Card.Footer>
      </Card>
      <Card border="warning" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>PROBLEMÁTICA</Card.Title>
          <Card.Text>
          Saber qué libros o documentos informativos  se encuentran disponibles   en   la   
          biblioteca  del Instituto Tecnológico de Pabellón de Arteaga  y   así   también   
          poder organizar una manera en la que los usuarios puedan hacer reservaciones de los
           documentos virtualmente para su recojo próximo. {'  Asi solucionamos esto '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">W</small>
        </Card.Footer>
      </Card>
      <Card border="warning" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>GRACIAS!</Card.Title>
          <Card.Text>
          Agradecemos sinceramente su tiempo y consideración. Esperamos tener la
           oportunidad de colaborar con usted y brindarle soluciones de calidad 
           que superen sus expectativas.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">W</small>
        </Card.Footer>
      </Card>
    </CardGroup>
</Container>
<br/>
<br/>
<Container>
    <h1>Nosotros</h1>
    
    <Image src='"./Img/Organigrama de empresa  .png"' fluid />;
</Container>
</center>
  )
}
 