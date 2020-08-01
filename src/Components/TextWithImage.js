import React from 'react'
import './TextWithImage.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TextWithImage(props) {
    return (
        <Row className="textWithImage" >
            <Col md={2} >
                <div className="textWithImage--img-circle">
                    <img src={props.image} alt="what1" />
                </div>
            </Col>
            <Col md={10} className="textWithImage--text">
                {props.children}
            </Col>
        </Row>
    )
}

export default TextWithImage