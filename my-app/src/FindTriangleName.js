import React, { useState, useRef } from "react";
import {TriangleDrawer} from './triangle.js';

const triangleNames = ({ sideOne, sideTwo, sideThree, setMessage }) => {
  sideOne = Number(sideOne);
  sideTwo = Number(sideTwo);
  sideThree = Number(sideThree);

  switch (true) {
    case sideOne === 0 || sideTwo === 0 || sideThree === 0:
      setMessage("Sides should not be zero cm");
      break;

    case sideOne === sideTwo && sideTwo === sideThree:
      setMessage("Equilateral triangle");
      break;

    case sideOne === sideTwo || sideTwo === sideThree || sideThree === sideOne:
      setMessage("Isoceles Triangle");
      break;

    case sideOne !== sideTwo && sideTwo !== sideThree && sideThree !== sideOne:
      setMessage("Scalene Triangle");
      break;

    default:
      setMessage("Unknown");
  }
};

const FindTriangleName = () => {
  const [sideOne, setSideOne] = useState("");
  const [sideTwo, setSideTwo] = useState("");
  const [sideThree, setSideThree] = useState("");
  const [message, setMessage] = useState("");
  const [firstSide, setFirstSide] = useState("");
  const [secondSide, setSecondSide] = useState("");
  const [thirdSide, setThirdSide] = useState("");
  

  const canvasRef = useRef(null)
  
  let triangleDrawer;

  const send = (event) => {
    event.preventDefault();
    if(!triangleDrawer){
        triangleDrawer=new TriangleDrawer(canvasRef.current)
    }
    triangleNames({ sideOne, sideTwo, sideThree, setMessage });
    console.log(sideOne,sideTwo, sideThree)
    triangleDrawer.draw( sideOne, sideTwo, sideThree)
    setFirstSide(sideOne);
    setSecondSide(sideTwo);
    setThirdSide(sideThree);
    
   
    console.log(firstSide);
    console.log(secondSide);
    console.log(thirdSide);

    //emptying states here
    setSideOne("");
    setSideTwo("");
    setSideThree("");
  };
  return (
    <div>
      <form onSubmit={send}>
        <h1>Enter the sides of a triangle</h1>
        <br />
        <label htmlFor="sideOne" className='label_one'>Triangle side one *</label>
        <input
          id="sideOne"
          type="number"
          value={sideOne}
          placeholder="Enter side one"
          min="1"
          required
          onChange={(e) => setSideOne(e.target.value)}
        />
        <br />
        <label htmlFor="sideTwo" className='label_one'>Triangle side two *</label>
        <input
          id="sideTwo"
          type="number"
          value={sideTwo}
          placeholder="Enter side two"
          min="1"
          required
          onChange={(e) => setSideTwo(e.target.value)}
        />
        <br />
        <label htmlFor="sideThree">Triangle side three *</label>
        <input
          id="sideThree"
          type="number"
          value={sideThree}
          placeholder="Enter side three"
          min="1"
          required
          onChange={(e) => setSideThree(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

     
      <canvas ref={canvasRef} width='500' height='400'></canvas>

    <h1>{message}</h1>
      
      </div>
  );
};
export default FindTriangleName;
