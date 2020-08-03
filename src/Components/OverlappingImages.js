import React from 'react'
import './OverlappingImages.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function OverlappingImages(props) {
    return (

        <Container>
            <Row>
                {props.children}
            </Row>
        </Container >
    )
}

export default OverlappingImages;


