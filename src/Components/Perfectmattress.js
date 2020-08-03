import React from 'react'
import './Perfectmattress.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlappingImages from './OverlappingImages'

function Perfectmattress() {
    return (
        <div className="perfectmattress">
            <Container>
                <Row>
                    <Col sm={6}>
                        <h2 className="perfectmattress--heading">
                            Your perfect custom
                            <div className="perfectmattress--tooltip top">?
                                <span className="perfectmattress--tooltip perfectmattress--tooltip_text">
                                    With Naturalist, you can individually customise left and right sides of the mattress, so that two people sharing the mattress can benefit from its innovative features. You can also flip the base layer to make the mattress softer or firmer</span>
                            </div>
                            mattress
                        </h2>
                    </Col>
                    <Col sm={6}>
                        <ul className="perfectmattress--measure">
                            <li className="perfectmattress--boder"><span>Single - Soft, Medium or Firm</span></li>
                            <li><span>S</span>80 x 200 cm</li>
                            <li><span>M</span>90 x 200 cm</li>
                        </ul>
                        <ul className="perfectmattress--measure">
                            <li className="perfectmattress--boder"><span>Double - Soft, Medium, Firm or Custom</span></li>
                            <li><span>S</span>160 x 200 cm</li>
                            <li><span>M</span>180 x 200 cm</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div clssName="perfectmattress--img">
                            <img src="/img/Naturalist.png" alt="Naturalist" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <OverlappingImages>
                <Col sm={6}>
                    <div className="images1">
                        <img src="/img/Naturalistfinaltop.png" alt="naturalistfinaltop" />
                        <p>The latex used in our products ensures easy airflow and durability</p>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="images2">
                        <video width="700" height="auto" autoplay>
                            <source src="/img/video.mp4" type="video/mp4" />
                        </video>
                        <p>You can customise the firmness of the mattress by flipping the base side</p>
                    </div>
                </Col>
            </OverlappingImages>
        </div>
    )
}

export default Perfectmattress;


