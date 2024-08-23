import React from "react";
import Form from "./form";
import Result from "./result";

const login=false;



function App() {
  return (
    <div className="container">
      {login?<Result />:<Form />}
    </div>
  );
}

export default App;
