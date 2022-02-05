import styled from "styled-components"
import bubbleSVG from "../assets/asset1.svg"
import greenDotSVG from "../assets/asset2.svg"
import orangeDotSVG from "../assets/asset3.svg"

const Bubbles = styled.img`
position: absolute;
bottom: 0;
right: 0;
height: 332px;
`

const GreenDots = styled.img`
position: absolute;
top: 0px;
right: 0px;
height: 123px;
`

const OrangeDots = styled.img`
position: absolute;
bottom: 0px;
left: 0px;
height: 237px;
`

function App() {
  return (
    <>
      <Bubbles src={bubbleSVG} />
      <GreenDots src={greenDotSVG} />
      <OrangeDots src={orangeDotSVG} />
    </>
  );
}

export default App;
