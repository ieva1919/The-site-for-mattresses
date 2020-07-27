import React from 'react'
import './Header.scss'
import Container from 'react-bootstrap/Container';


function Header() {
    return (
        <Container>
            <div className="header">
                <a href="#"><p>Naturalist</p></a>
                <ul className="header--list greencolor">
                    <a href="#"><li>EN</li></a>
                    <a href="#"><li>DE</li></a>
                </ul>
                <ul className="header--list">
                    <a href="#"><li>Pillow</li></a>
                    <a href="#"><li>Are you a retailer?</li></a>
                </ul>
            </div>
        </Container>
    )

}

export default Header;