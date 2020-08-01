import React from 'react'
import './Organic.scss'
import Container from 'react-bootstrap/Container';
import WhyusHeading from './WhyusHeading';
import TextWithImage from './TextWithImage';

function Organic() {
    return (
        <div className="organic">
            <Container >
                <WhyusHeading
                    title="What's Naturalist made of?"
                />
                <TextWithImage image="/img/what1.png" >
                    <h1>Organic <em>latex</em></h1>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </TextWithImage>
                <TextWithImage image="/img/cotton1.jpg" >
                    <h1>Organic <em><br />cotton cover</em></h1>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </TextWithImage>
                <TextWithImage image="/img/wool1.jpg" >
                    <h1>Organic <em>wool</em></h1>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </TextWithImage>
                <TextWithImage image="/img/cotton2.jpg" >
                    <h1>Natural <em><br />cotton pocket springs</em></h1>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </TextWithImage>
            </Container >
        </div>
    )
}

export default Organic;


