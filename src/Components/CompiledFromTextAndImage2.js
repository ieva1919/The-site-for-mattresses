import React from 'react'
import './CompiledFromTextAndImage2.scss'
import Getaqoute from './Getaqoute'
import TextWithTitle from './TextWithTitle';
import OverlappingImages from './OverlappingImages';
import ImageInTheText from './ImageInTheText';
import TextWithText from './TextWithText';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CompiledFromTextAndImage2() {
    return (
        <Container>
            <div className="newgeneration2">
                <TextWithTitle>
                    <h1>Sure there isn't anything <br />embarr for your <span className="textWithTitle--heading_white"> <br />comfort and support </span></h1 >
                </TextWithTitle>
                <ImageInTheText className="newgeneration2--img">
                    <OverlappingImages>
                        <Col sm={6}>
                            <div className="images1">
                                <img src="/img/pillow.png" alt="Boxes" />
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="images2">
                                <img src="/img/pillowsecond.png" alt="Boxes" />
                            </div>
                        </Col>
                    </OverlappingImages>
                </ImageInTheText>
                <div className="newgeneration2--background">
                    <TextWithText title="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                    />
                    <Getaqoute
                        title1="Read more"
                    />
                </div>
            </div>
        </Container>
    )
}

export default CompiledFromTextAndImage2;


