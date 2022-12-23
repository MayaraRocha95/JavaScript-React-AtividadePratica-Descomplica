import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3 mt-5">
      <Container>
        <Row>
          <Col className="text-center text-muted">
            Endereço: Rua Tal, 123 - Bairro Tal - Cidade Tal<br />
            Telefone: (00) 0000-0000<br />
            Siga-nos nas redes sociais:
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image className="img-footer" src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image className="img-footer" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image className="img-footer" src="https://cdn-icons-png.flaticon.com/512/3669/3669739.png" alt="Linkedin" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
