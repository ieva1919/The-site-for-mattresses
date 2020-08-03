import React from 'react';
import './App.css';
import Header from './Components/Header'
import Heading from './Components/Heading'
import OverlappingImages from './Components/OverlappingImages'
import Description from './Components/Description'
import Getaqoute from './Components/Getaqoute'
import Whyus from './Components/Whyus'
import Newgeneration from './Components/Newgeneration'
import Organic from './Components/Organic'
import Perfectmattress from './Components/Perfectmattress'
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Header />
      <Heading />
      <OverlappingImages>
        <Col sm={6}>
          <div className="images1">
            <img src="/img/intro1.png" alt="intro1" />
          </div>
        </Col>
        <Col sm={6}>
          <div className="images2">
            <img src="/img/intro2.png" alt="intro1" />
          </div>
        </Col>
      </OverlappingImages>
      <Description />
      <Getaqoute
        title1="Get a qoute"
      />
      <Whyus />
      <Newgeneration />
      <Organic />
      <Perfectmattress />
    </div>
  );
}

export default App;
