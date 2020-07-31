import React from 'react'
import './Organic.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WhyusHeading from './WhyusHeading';

function Organic() {
    return (
        <div className="organic">
            <Container >
                <WhyusHeading
                    title1="Why us?"
                    title2="What's Naturalist made of?"
                    title3="~~~~~~~~~~~~~"
                />
                <Row>
                    <Col sm={4} className="organic--img">
                        <img src="/img/what1.png" alt="what1" />
                    </Col>
                    <Col sm={8} className="organic--text">
                        <h1>Organic <span className="organic--text organic--text_white">latex</span></h1>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="organic--img">
                        <img src="/img/cotton1.jpg" alt="cotton2" />
                    </Col>
                    <Col sm={8} className="organic--text">
                        <h1>Organic <span className="organic--text organic--text_white"><br />cotton cover</span></h1>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="organic--img">
                        <img src="/img/wool1.jpg" alt="cotton2" />
                    </Col>
                    <Col sm={8} className="organic--text">
                        <h1>Organic <span className="organic--text organic--text_white">wool</span></h1>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="organic--img">
                        <img src="/img/cotton2.jpg" alt="cotton2" />
                    </Col>
                    <Col sm={8} className="organic--text">
                        <h1>Natural <span className="organic--text organic--text_white"><br />cotton pocket springs</span></h1>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default Organic;


