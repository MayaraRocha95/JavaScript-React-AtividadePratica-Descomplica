import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import card1 from '../../src/assets/card1.jpeg';
import card2 from '../../src/assets/card2.jpg';
import card3 from '../../src/assets/card3.jpg';
import card4 from '../../src/assets/card4.jpeg';
import card5 from '../../src/assets/card5.jpg';
import card6 from '../../src/assets/card6.jpg';

function NossoProdutos(props) {
  const { setModalPagamento}= props;
   return (
    <Container>
    <h3>Nossos Produtos</h3>
    <Row>
      <Col md={4}>
        <Card>
          <Image className="card-img-top" src={card1} alt="Card image" />
          <Card.Body>
            <Card.Title>Sombra</Card.Title>
            <div className="product-price">
              <h3>R$ 29,90</h3>
              <Button variant="primary" onClick={setModalPagamento}>
              Adicione ao
                <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" width="10%" alt="" />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Image className="card-img-top" src={card2} alt="Card image" />
          <Card.Body>
            <Card.Title>Base</Card.Title>
            <div className="product-price">
              <h3>R$ 29,90</h3>
              <Button variant="primary" onClick={setModalPagamento}>
              Adicione ao
                <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" width="10%" alt="" />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Image className="card-img-top" src={card3} alt="Card image" />
          <Card.Body>
            <Card.Title>Creme para pele</Card.Title>
            <div className="product-price">
              <h3>R$ 29,90</h3>
              <Button variant="primary" onClick={setModalPagamento}>
              Adicione ao
                <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" width="10%"  alt="" />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
      <Card>
        <Image className="card-img-top" src={card4} alt="Card image" />
        <Card.Body>
          <Card.Title>Esmaltes</Card.Title>
          <div className="product-price">
            <h3>R$ 29,90</h3>
            <Button variant="primary" onClick={setModalPagamento}>
            Adicione ao
              <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" width="10%" alt="" />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Image className="card-img-top" src={card5} alt="Card image" />
        <Card.Body>
          <Card.Title>Pincel</Card.Title>
          <div className="product-price">
            <h3>R$ 29,90</h3>
            <Button variant="primary" onClick={setModalPagamento}>
            Adicione ao
              <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" width="10%" alt="" />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Image className="card-img-top" src={card6} alt="Card image" />
        <Card.Body>
          <Card.Title>Blush</Card.Title>
          <div className="product-price">
            <h3>R$ 29,90</h3>
            <Button variant="primary" onClick={setModalPagamento}>
              Adicione ao
              <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" width="10%" alt="" />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
      </Row>
      </Container>

    );
  }
  
  export default NossoProdutos;
  