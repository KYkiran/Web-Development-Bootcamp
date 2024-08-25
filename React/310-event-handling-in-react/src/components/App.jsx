import React from "react";
import { useState } from "react";

function App() {
  const [handleState,setHandleState]=useState("Hello");
  const [MouseState,setMouseState]=useState(false);

  function handleClick(){
    setHandleState("Submitted")
  }
  function MouseOver(){
    setMouseState(true);
  }
  function MouseOut(){
    setMouseState(false);
  }
  return (
    <div className="container">
      <h1>{handleState}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{backgroundColor:MouseState?"black":"white"}}
      onClick={handleClick}
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
      >Submit
      </button>
      
    </div>
  );
}

export default App;
