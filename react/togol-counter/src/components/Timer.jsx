import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [second,setSecond] = useState(0)
    const [isActive,setIsactive] =useState(false)

    useEffect(()=>{
        let interval;

        if(isActive){
            interval=setInterval(()=>{
                setSecond((prv)=>prv+1);
            },1000)
        }else{
            clearInterval(interval)
        }

        return()=>clearInterval(interval)
    },[isActive])

    const timer=()=>{
        setIsactive(!isActive)
    }

    const restTimer =()=>{
        setSecond(0);
        setIsactive(false)
    }
  return (
    <>
    <header className="App-header">
    <h1>Timer App</h1>
    <p>{second}</p>
    <button onClick={timer}>{isActive?'Pause':'Start'}</button>
    <button onClick={restTimer}>Reset</button>
    </header>
    </>
  )
}

export default Timer