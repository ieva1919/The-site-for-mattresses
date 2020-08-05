import React from 'react'
import './CompiledFromTextAndImage.scss'
import Getaqoute from './Getaqoute'
import TextWithTitle from './TextWithTitle';
import ImageInTheText from './ImageInTheText';
import TextWithText from './TextWithText';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function CompiledFromTextAndImage() {
    return (
        <Row>
            <Container>
                <div className="newgeneration">
                    <TextWithTitle>
                        <h1>A new generation of <span className="textWithTitle--heading_white">customisable </span>modular mattresses</h1 >
                    </TextWithTitle>
                    <ImageInTheText>
                        <img src="/img/Boxes.jpg" alt="Boxes" />
                    </ImageInTheText>
                    <TextWithText title="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident"
                    />
                    <Getaqoute
                        title1="Are you a retailer?"
                    />
                </div>
            </Container>
        </Row>
    )
}

export default CompiledFromTextAndImage;


