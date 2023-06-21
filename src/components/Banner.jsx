import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className="hero-section">
      <Container fluid>
        <Row>
          <Col>
            <img
              className="img-fluid"
              style={{ height: '60vh', width: '100vw' }}
              src="https://kubrick.htvapps.com/mediaos.s3.amazonaws.com/htv_default_image/wdsu/top_image.png"
              alt="Hero"
            />
          
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
