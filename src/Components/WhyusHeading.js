import React from 'react'
import './WhyusHeading.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WhyusHeading(props) {
    return (
        <Row className="whyus--heading">
            <Col sm={6} className="whyus--heading whyus--heading_textleft">
                <p>{props.title}</p>
            </Col>
            <Col sm={6} className="whyus--heading whyus--heading_textright ">
                <p>~~~~~~~~~~~~~</p>
            </Col>
        </Row>
    )
}

export default WhyusHeading;


