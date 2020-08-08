import React, { useEffect, useRef, useState } from 'react'
import './TextCarousel.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TextCarousel() {

    const [y, setY] = useState(0)
    const element = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (element.current) {
                const rect = element.current.getBoundingClientRect()
                setY(Math.max((rect.y - window.innerHeight + 200) * 900 / window.innerWidth, window.innerWidth - 2100))
            }
        })
    }, [])

    return (
        <Row>
            <Col sm={12}>
                <div className="textCarousel--container">
                    <ul className="textCarousel" ref={element} style={{ transform: `translateX(${y | 0}px)` }}>
                        <li>Natural</li>
                        <li>Simple</li>
                        <li>Portable</li>
                        <li>Customisable</li>
                        <li>Natural</li>
                    </ul>
                </div>
            </Col>
        </Row>
    )
}

export default TextCarousel;


