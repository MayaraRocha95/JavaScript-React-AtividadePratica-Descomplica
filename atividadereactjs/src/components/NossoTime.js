import { Container, Row, Col, Image } from 'react-bootstrap';
import time1 from  '../assets/time1.jpg';
import time2 from '../assets/time2.jpg';
import time3 from '../assets/time3.jpg';
import time4 from '../assets/time4.jpg';
import React from 'react';


function NossoTime() {
  return (
<Container>
        <h3>Nosso Time</h3>
        <Row>
          <Col md={3}>
            <Image src={time1} className="img-fluid rounded-circle" />
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/3669/3669739.png" alt="Linkedin" />
              </a>
            </div>
          </Col>
          <Col md={3}>
            <Image src={time2} className="img-fluid rounded-circle" />
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/3669/3669739.png" alt="Linkedin" />
              </a>
            </div>
          </Col>
          <Col md={3}>
            <Image src={time3} className="img-fluid rounded-circle" />
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/3669/3669739.png" alt="Linkedin" />
              </a>
            </div>
          </Col>
          <Col md={3}>
            <Image src={time4} className="img-fluid rounded-circle" />
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/3669/3669739.png" alt="Linkedin" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

  )
}

export default NossoTime;