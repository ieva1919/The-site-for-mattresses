import React, { useEffect, useState, useRef } from 'react'
import './OverlappingImagesFirst.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function OverlappingImagesFirst(props) {

    const [elementVisible, setElementVisible] = useState(false)
    const element = useRef()

    console.log(elementVisible)


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (element.current) {
                const rect = element.current.getBoundingClientRect()
                console.log(rect)
                setElementVisible(rect.y < 155)
            }
        })
    }, [])

    return (
        <div className={elementVisible && 'background'} ref={element} >
            <Container>
                <div>
                    <h4 className="heading--h4">Synchronized with your body, harmonized with the Earth.</h4>
                </div>
                <Row>
                    {props.children}
                </Row>
            </Container >
        </div>
    )
}

export default OverlappingImagesFirst;


