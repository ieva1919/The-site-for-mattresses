import React from 'react'
import './TextWithTitle.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TextWithTitle(props) {
    return (
        <Row>
            <Container className="newgeneration">
                <Col sm={12}>
                    <div className="newgeneration--heading">
                        {props.children}
                    </div>
                    <div>
                        <p className="newgeneration--text">
                            {props.children}
                        </p>
                    </div>
                </Col>
            </Container>
        </Row>
    )
}
export default TextWithTitle;