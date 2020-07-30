import React from 'react';
import './App.css';
import Header from './Components/Header'
import Heading from './Components/Heading'
import OverlappingImages from './Components/OverlappingImages'
import Description from './Components/Description'
import Getaqoute from './Components/Getaqoute'
import Whyus from './Components/Whyus'
import Newgeneration from './Components/Newgeneration'

function App() {
  return (
    <div className="App">
      <Header />
      <Heading />
      <OverlappingImages />
      <Description />
      <Getaqoute />
      <Whyus />
      <Newgeneration />
    </div>
  );
}

export default App;
