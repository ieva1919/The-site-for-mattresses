import React from 'react'
import './OverlappingImagesThird.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function OverlappingImagesThird(props) {

    return (
        <Container>
            <Row>
                {props.children}
            </Row>
        </Container >
    )
}

export default OverlappingImagesThird;


