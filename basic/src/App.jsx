import {useState} from "react";
import "./App.css"


function App() {

  let [counter, setCounter] = useState(Number.MAX_VALUE)


  // let counter = 0;
  const add = ()=>{
    setCounter(counter + (Number.MAX_VALUE / 2));
  }

  const sub = ()=>{
    setCounter(counter - (Number.MAX_VALUE / 2));
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
