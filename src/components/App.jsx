import React from "react";
import List from "./List";
import Header from "./Header";
import {add,multiply,divide,subtract} from "./Calculator"

const img = "https://picsum.photos/200";

 const date = new Date();
 const currentTime = date.getHours()
 let greeting ;
 const  custuomStyle = {
    color :" ",
   
}
 
 if(currentTime<12){
    greeting = "good morning";
    custuomStyle.style="yellow"
    
 }
 else if (currentTime<18){
    greeting = "goodafternoon";
    custuomStyle.style="green"
 }
 else {
    greeting ="goodnight";
    custuomStyle.style="blue"
 }

function App(){
    return(<div>
          <Header/>
          <List/>
          <ul>
            <li>{add(2,5)}</li>
            <li>{subtract(5,9)}</li>
            <li>{divide(10,2)}</li>
            <li>{multiply(4,9)}</li>
          </ul>
        <h1 style={custuomStyle} contentEditable ="true" spellCheck="true">hurray and {greeting}i just wrote my first programme without watching tutuotrial video </h1>
         <img alt="random" src={img + "?"} />
    </div>
    )
}
export default App;