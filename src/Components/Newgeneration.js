import React from 'react'
import './Newgeneration.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Getaqoute from './Getaqoute'

function Newgeneration() {
    return (
        <Row>
            <Container className="newgeneration">
                <Col sm={12}>
                    <div className="newgeneration--heading">
                        <h1>A new generation of <span className="newgeneration--heading newgeneration--heading_white">customisable </span>modular mattresses</h1 >
                        <img src="/img/Boxes.jpg" alt="Boxes" />
                    </div>
                    <div>
                        <p className="newgeneration--text">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.</p>
                    </div>
                    <Getaqoute
                        title2="Are you a retailer?"
                    />
                </Col>
            </Container>
        </Row>
    )
}

export default Newgeneration;


