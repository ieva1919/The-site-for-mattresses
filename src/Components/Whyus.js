import React from 'react'
import './Whyus.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Whyus() {
    return (
        <Container>
            <div className="whyus">
                <Row className="whyus--heading">
                    <Col sm={6} className="whyus--heading whyus--heading_textleft">
                        <p>Why us?</p>
                    </Col>
                    <Col sm={6} className="whyus--heading whyus--heading_textright ">
                        <p>~~~~~~~~~~~~~</p>
                    </Col>
                </Row>
                <Row className="whyus--borderbottom">
                    <Col sm={6} className="whyus--title why--img">
                        <img src="/img/why1.png" alt="why1" />
                        <h2>Express courier delivery</h2>
                    </Col>
                    <Col sm={6} className="whyus--text">
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                </Row>
                <Row className="whyus--borderbottom ">
                    <Col sm={6} className="whyus--title why--img">
                        <img src="/img/why2.png" alt="why2" />
                        <h2>Transportable in any vehicle</h2>
                    </Col>
                    <Col sm={6} className="whyus--text">
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} className="whyus--title why--img">
                        <img src="/img/why3.png" alt="why3" />
                        <h2>Over 10 years of experience</h2>
                    </Col>
                    <Col sm={6} className="whyus--text">
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Whyus;


