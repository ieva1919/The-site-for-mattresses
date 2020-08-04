import React from 'react'
import './TextCarousel.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TextCarousel() {
    return (
        <Row>
            <Col sm={12}>
                <ul className="textCarousel">
                    <li>Natural</li>
                    <li>Simple</li>
                    <li>Portable</li>
                    <li>Customisable</li>
                    <li>Natural</li>
                </ul>
            </Col>
        </Row>
    )
}

export default TextCarousel;


