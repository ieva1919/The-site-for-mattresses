import React from 'react'
import './Organic.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WhyusHeading from './WhyusHeading'

function Organic() {
    return (
        <Container>
            <WhyusHeading />
            <Row className="organic">
                <Col sm={6} className="organic--img">
                    <img src="/img/what1.png" alt="what1" />
                </Col>
                <Col sm={6} className="whyus--text">
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Col>
            </Row>
        </Container >
    )
}

export default Organic;


