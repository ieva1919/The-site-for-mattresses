import React from 'react'
import './TextWithTitle.scss'
import Col from 'react-bootstrap/Col';

function TextWithTitle(props) {
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
export default TextWithTitle;