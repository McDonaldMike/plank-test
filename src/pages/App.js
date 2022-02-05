import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import styled from "styled-components"
import bubbleSVG from "../assets/asset1.svg"
import greenDotSVG from "../assets/asset2.svg"
import orangeDotSVG from "../assets/asset3.svg"
import Nav from "../components/Nav"
import CardList from "../components/CardList"

const Container = styled.div`
position: relative;
min-height: 140vh;
`

const Bubbles = styled.img`
position: absolute;
bottom: 0;
right: 0;
height: 332px;
z-index: -1;

@media (max-width: 640px) {
  height: 168px;
}
`

const GreenDots = styled.img`
position: absolute;
top: 0px;
right: 0px;
height: 123px;
z-index: -1;

@media (max-width: 640px) {
  height: 62px;
}
`

const OrangeDots = styled.img`
position: absolute;
bottom: 0px;
left: 0px;
height: 237px;
z-index: -1;

@media (max-width: 640px) {
  height: 119px;
}
`

function App() {
  const param = window.location.pathname;
  const [currentCategory, setCurrentCategory] = useState(param.substr(1, param.length));

  const updateCategory = (category) => {
    setCurrentCategory(category)
  }

  return (
    <Container>
      <Nav currentCategory={currentCategory} updateCategory={(category) => updateCategory(category)} />
      <Router>
        <Routes>
          <Route path=":category" element={<CardList category={currentCategory} />} />
          <Route path="/" element={<CardList category={currentCategory} />} />
        </Routes>
      </Router>
      <Bubbles src={bubbleSVG} />
      <GreenDots src={greenDotSVG} />
      <OrangeDots src={orangeDotSVG} />
    </Container>
  );
}

export default App;
