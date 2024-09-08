import React from "react";
import { useState } from "react";

function App() {
  
  const [inputState,setInputState]=useState("");
  const [items,setItems]=useState([]);

  function handleInputState(event){
    setInputState(event.target.value);
  }

  function handleClick(){
    setItems((prev)=>{
      return [...prev,inputState];
    });
  }

  console.log(inputState);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputState} onChange={handleInputState}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todo=><li>{todo}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
