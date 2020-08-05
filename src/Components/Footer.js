import React from 'react'
import './Footer.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row className="footer--img">
                    <Col sm={4}>
                        <img src="/img/logo-gols.svg" alt="Boxes" />
                    </Col>
                    <Col sm={4}>
                        <img src="/img/logo-gots.svg" alt="Boxes" />
                    </Col>
                    <Col sm={4}>
                        <img src="/img/logo-oeko.svg" alt="Boxes" />
                    </Col>
                </Row>
                <Row className="footer--img">
                    <Col sm={12}>
                        <ul className="footer--list">
                            <li>Contact us </li>
                            <li>emailemail@email.com</li>
                            <li>Impressum</li>
                            <li>Privacy Policy</li>
                            <li>©2019 Naturalist</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;


