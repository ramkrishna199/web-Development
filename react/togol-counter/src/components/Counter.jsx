import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const incrimentCounter = ()=>{
        setCount(count+1)
    }

    const decrementCounter =()=>{
        setCount(count-1);
    }

  return (
    <>
          <header className="App-header">
        <h1>Counter App</h1>
        <p>{count}</p>
        <button onClick={incrimentCounter}>Incriment</button>
        <button onClick={decrementCounter}>Decriment</button>
        </header>
    </>
  )
}

export default Counter