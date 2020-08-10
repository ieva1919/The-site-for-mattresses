import React from 'react'
import './OverlappingImagesSecond.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function OverlappingImagesSecond(props) {


    return (
        <Container>
            <Row>
                {props.children}
            </Row>
        </Container >
    )
}

export default OverlappingImagesSecond;


