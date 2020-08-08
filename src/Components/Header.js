import React from 'react'
import './Header.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
    return (
        <Container>
            <div className="header">
                <Row>
                    <Col sm={4}>
                        <span className="header--icon">
                            <a href="/"><p>Naturalist</p></a>
                        </span>
                    </Col>
                    <Col sm={4}>
                        <ul className="header--languages">
                            <a href="/"><li>En</li></a>
                            <a href="/"><li>De</li></a>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <ul className="header--retailer">
                            <a href="/"><li>Pillow</li></a>
                            <a href="/"><li>Are you a retailer?</li></a>
                        </ul>
                    </Col>
                </Row>
            </div>
        </Container>
    )

}

export default Header;