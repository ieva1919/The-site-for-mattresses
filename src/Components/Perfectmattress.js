import React from 'react'
import './Perfectmattress.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Perfectmattress() {
    return (
        <div className="perfectmattress">
            <Container>
                <Row>
                    <Col sm={7}>
                        <h2 className="perfectmattress--heading">
                            Your perfect custom
                            <div className="perfectmattress--tooltip top">?
                                <span className="perfectmattress--tooltip perfectmattress--tooltip_text">
                                    With Naturalist, you can individually customise left and right sides of the mattress, so that two people sharing the mattress can benefit from its innovative features. You can also flip the base layer to make the mattress softer or firmer</span>
                            </div>
                            mattress
                        </h2>
                    </Col>
                    <Col sm={5}>
                        <ul className="perfectmattress--measure">
                            <li className="perfectmattress--boder">Single - Soft, Medium or Firm</li>
                            <li><span>S</span>80 x 200 cm</li>
                            <li><span>M</span>90 x 200 cm</li>
                        </ul>
                        <ul className="perfectmattress--measure">
                            <li className="perfectmattress--boder">Double - Soft, Medium, Firm or Custom</li>
                            <li><span>S</span>160 x 200 cm</li>
                            <li><span>M</span>180 x 200 cm</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Perfectmattress;


