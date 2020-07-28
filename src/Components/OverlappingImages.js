import React from 'react'
import './OverlappingImages.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OverlappingImages() {
    return (

        <Row>
            <Col sm={12}>
                <Col sm={12}>
                    <div className="images">
                        <img src="/img/intro1.png" alt="intro1" />
                    </div>
                </Col>
                <Col sm={12}>
                    <div className="images">
                    </div>
                </Col>
            </Col>
        </Row>
    )
}

export default OverlappingImages;


