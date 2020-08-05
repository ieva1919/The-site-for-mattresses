import React from 'react'
import './TextWithText.scss'
import Col from 'react-bootstrap/Col';

function TextWithText(props) {
    return (
        <div className="textWithTitle">
            <Col sm={12}>
                <div className="textWithTitle--text">
                    <p> {props.title} </p>
                </div>
            </Col>
        </div>
    )
}
export default TextWithText;