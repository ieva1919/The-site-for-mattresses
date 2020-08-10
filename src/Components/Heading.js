import React from 'react'
import './Heading.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Heading() {
    return (

        <Row>
            <Col sm={12}>
                <div className="heading">
                    <h1>Natural <span className="heading-sign">&</span> Convenient <br />mattresses</h1>
                </div>
            </Col>
        </Row>
    )
}

export default Heading;