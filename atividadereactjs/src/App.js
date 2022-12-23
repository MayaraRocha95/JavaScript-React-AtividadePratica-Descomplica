/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import React, { useState} from 'react';
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './assets/banner.jpg';
import Creme from './assets/creme.jpg';
import Base from './assets/base.jpg';
import Esmaltes from './assets/esmaltes.jpg';
import imagem from './assets/quemsomos.jpg';
import { Container, Row, Col} from 'react-bootstrap';
import NossoTime from './components/NossoTime'
import NossoProdutos from './components/NossoProdutos';
import Carrinho from './components/Carrinho'
import Footer from './components/Footer';


function App() {
  const [modalPagamento, setModalPagamento] = useState(false);
  return (

    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">CosmeticosDev</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Nav.Link href="quem-somos.html">Quem Somos</Nav.Link>
            <Nav.Link href="nossos-produtos.html">Nossos Produtos</Nav.Link>
            <Nav.Link href="nosso-time.html">Nosso Time</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            src={Banner}
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption>
            <h5>Batons Dev</h5>
            <p>
              Lábios bonitos, lábios hidratados com o nosso batom líquido de
              longa duração!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Creme}
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption>
            <h5>Cremes Dev</h5>
            <p>
              Experimente a maciez da sua pele com o nosso creme corporal
              nutritivo
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Base}
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption>
            <h5>Bases Dev</h5>
            <p>
              Obtenha uma pele perfeita com a nossa base líquida de longa
              duração!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Esmaltes}
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption>
            <h5>Sombras Dev</h5>
            <p>
              Crie maquiagens incríveis com nossa ampla variedade de sombras
              cremosas e pigmentadas.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <Row>
          <Col md={6}>
            <h3>Quem Somos</h3>
            <p>
              Bem-vindo à nossa empresa CosmeticosDev! Somos especializados em
              produtos de alta qualidade que ajudam as pessoas a se sentirem e se
              verem melhor.

              Nós acreditamos em práticas éticas e sustentáveis ​​na
              fabricação de nossos produtos. Nós trabalhamos com fornecedores
              confiáveis ​​e utilizamos embalagens recicláveis ​​onde possível.
              Nós valorizamos nossos clientes e sempre nos esforçamos para
              oferecer um atendimento excepcional. Nossa equipe de profissionais
              altamente treinados está sempre disponível para ajudar com qualquer
              dúvida ou preocupação.

              Obrigado por escolher a nossa empresa de cosméticos. Esperamos fazer
              parte da sua rotina de beleza por muitos anos.
            </p>
          </Col>
          <Col md={6}>
            <img src={imagem} className="img-fluid" />
          </Col>
        </Row>
      </Container>

      
  
<NossoTime/>             
<NossoProdutos setModalPagamento={setModalPagamento}/>{
  modalPagamento  && <Carrinho modalPagamento={modalPagamento} setModalPagamento={setModalPagamento}
  />   
}

<Footer/>


    </div>
  );

}

export default App;


