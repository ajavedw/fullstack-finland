import React from "react";
import ReactDOM from "react-dom";

const App = () => (

const course = "halfs stack application development";
const part1 = "Fundamentals of Reacct";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of component";
const exercises3 = 14;


<div>
  <h1>{course}</h1>
  <p>{part1}{exercises1}</p>
  <p>{part2}{exercises2}</p>
  <p>{part3}{exercises3}</p>
  <p>No of exercise {exercises1 + exercises2 + exercises3}</p>
</div>

ReactDOM.render(<App />, document.getElementById("root"));
