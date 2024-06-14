import {  useState } from 'react'

import './App.css'
import useCustomMemo from './hooks/UseMemoCustom';

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(100);
  var squaredValue=() =>{
    console.log("expensive");
    return count * count;
  }

  var usingMemoFirstTime =useCustomMemo(squaredValue,[count]);

  return (
    <>
      <h1>Counter : {count}</h1>
      <h1>Squared Counter : {usingMemoFirstTime}</h1>
      <button onClick={()=>setCount(count + 1)} >Increment</button>
      <h1>Counter : {count1}</h1>
      <button onClick={()=>setCount1(count1 -1)}>Decrement</button>
    </>
  )
}

export default App
