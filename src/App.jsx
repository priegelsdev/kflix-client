import React, {useEffect, useState} from "react";

export default function App() {
  const exArr = ['hello', 'hi', 'welcome']
  let rdmNum = Math.floor(Math.random() * 3)

  const [test, setTest] = useState(exArr[rdmNum])

  function changeText() {
    rdmNum = Math.floor(Math.random() * 3)
    setTest(exArr[rdmNum])
  }

  return ( 
    <div>
      <div>{test}</div>
      <button onClick={changeText}>Click me</button>
    </div>
  )
}