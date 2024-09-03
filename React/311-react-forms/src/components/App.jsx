import React, { useState } from "react";

function App() {
  const [name,setName]=useState("");
  const [heading,setHeading]=useState("");
  const [mouseState,setMouseState]=useState("white");

  function handleChange(event){
    setName(event.target.value);
  }

  function handleClick(){
    setHeading(name);
  }

  function mouseOver(){
    setMouseState("black");
  }

  function mouseOut(){
    setMouseState("white");
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input type="text" placeholder="What's your name?" onChange={handleChange}/>
      <button onClick={handleClick} style={{backgroundColor:mouseState}} onMouseOver={mouseOver} onMouseOut={mouseOut}>Submit</button>
    </div>
  );
}

export default App;
