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
`

const Bubbles = styled.img`
position: absolute;
bottom: 0;
right: 0;
height: 332px;
z-index: -1;
`

const GreenDots = styled.img`
position: absolute;
top: 0px;
right: 0px;
height: 123px;
z-index: -1;
`

const OrangeDots = styled.img`
position: absolute;
bottom: 0px;
left: 0px;
height: 237px;
z-index: -1;
`

function App() {
  return (
    <Container>
      <Nav />
      <Router>
        <Routes>
          <Route path=":category" element={<CardList />} />
          <Route path="/" element={<CardList />} />
        </Routes>
      </Router>
      <Bubbles src={bubbleSVG} />
      <GreenDots src={greenDotSVG} />
      <OrangeDots src={orangeDotSVG} />

    </Container>
  );
}

export default App;
