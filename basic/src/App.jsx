import {useState} from "react";
import "./App.css"


function App() {

  let [counter, setCounter] = useState(0)


  // let counter = 0;
  const add = ()=>{
    if(counter < 20) setCounter(++counter );
  }

  const sub = ()=>{
    if(counter > 0) setCounter(counter - 1);
  }



  return (
    <>
    <div className="Hello">
      <h1>React Counter app</h1>
      <button onClick={add}><h1>+</h1></button>
      <h3>Counter value: {counter}</h3>
      <button onClick={sub}><h1>-</h1></button>
    </div>
    </>
  )
}


export default App
