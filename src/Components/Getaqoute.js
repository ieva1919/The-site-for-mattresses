import React from 'react'
import './Getaqoute.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Getaqoute() {
    return (
        <Container>
            <div className="getaqoute">
                <Row>
                    <Col sm={4}>
                    </Col>
                    <Col sm={4}>
                        <ul className="getaqoute--text">
                            <a href="#"><li>Get a quote</li></a>
                        </ul>
                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Getaqoute;


