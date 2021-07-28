import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(props){
  return(<Card
    key = {props.id} 
    emoji = {props.emoji}
    name = {props.name}
    meaning = {props.meaning} 
    />);
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
         {emojipedia.map(createCard)}  

         <Card 
         name = {emojipedia[0].name} 
         emoji= {emojipedia[0].emoji}
         meaning= {emojipedia[0].meaning }
          />

      </dl>
    </div>
  );
}

export default App;
