import React from "react";
import emojipedia from "../emojipedia";

function Maps(emojipedia){
  return (<Card 
  id={emojipedia.id}
  emoji={emojipedia.emoji}
  name={emojipedia.name}
  meaning={emojipedia.meaning}
  />)
}

function Card(props){
  return <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(Maps)}
      </dl>
    </div>
  );
}

export default App;
