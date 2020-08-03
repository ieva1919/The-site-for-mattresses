import React from 'react'
import './TextCarousel.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TextCarousel() {
    return (
        <Row>
            <Col sm={12}>
                <div className="TextCarousel">
                    <span>Natural</span> <span className="dot"></span>
                    <span>Simple</span>
                    <span>Portable</span>
                    <span>Customisable</span>
                    <span>Natural</span>
                </div>
            </Col>
        </Row>
    )
}

export default TextCarousel;


