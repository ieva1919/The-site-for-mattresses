import React from 'react'
import './Newgeneration.scss'
import Getaqoute from './Getaqoute'
import TextWithTitle from './TextWithTitle';


function Newgeneration() {
    return (
        <TextWithTitle>
            <div>
                <h1>A new generation of <span className="newgeneration--heading_white">customisable </span>modular mattresses</h1 >
                <img src="/img/Boxes.jpg" alt="Boxes" />
            </div>
            <div>
                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident
            </p>
            </div>
            <Getaqoute
                title1="Are you a retailer?"
            />
        </TextWithTitle>

    )
}

export default Newgeneration;


