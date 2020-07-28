import React from 'react'
import './OverlappingImages.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OverlappingImages() {
    return (

        <Container>
            <Row>
                <Col sm={6}>
                    <div className="images1">
                        <img src="/img/intro1.png" alt="intro1" />
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="images2">
                        <img src="/img/intro2.png" alt="intro2" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OverlappingImages;


