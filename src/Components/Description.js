import React, { useEffect, useState, useRef } from 'react'
import './Description.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Description() {

    const [classVisible, setClassVisible] = useState(false)
    const element = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (element.current) {
                const rect = element.current.getBoundingClientRect()
                // console.log(rect)
                setClassVisible(rect.y < -443)
            }
        })
    }, [])

    return (
        <div ref={element} >
            <div className={'text ' + (classVisible && 'backgroundWhite')} >
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className="text-heading">
                                <h1>Bringing ecology & sustainability into your daily life</h1>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="text-description">
                                <p>We are a family-owned business, devoted to creating natural products that bring people closer to nature and help them maintain a healthier lifestyle. Our company’s activity is based on trust, ecological responsibility, and well-being of our customers.<br />Naturalist is the result of long and thorough research and development of 100 % organic, premium quality mattress that offers maximum support, comfort, and longevity.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Description;


