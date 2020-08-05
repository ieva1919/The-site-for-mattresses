import React from 'react'
import './ImageInTheText.scss'
import Col from 'react-bootstrap/Col';

function ImageInTheText(props) {
    return (
        <div className="textWithTitle">
            <Col sm={12}>
                <div className="textWithTitle--heading">
                    {props.children}
                </div>
            </Col>
        </div>
    )
}
export default ImageInTheText;