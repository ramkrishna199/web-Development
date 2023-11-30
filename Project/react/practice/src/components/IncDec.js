import React from 'react';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { Inc,Dec } from '../stats/reducers/index';

const IncDec = () => {
    const currentState =useSelector((state)=>state.number);
    const dispach =useDispatch()
  return (
    <>
    <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <h1>Redux Practice</h1>
    <h1 style={{color:"red"}}>{currentState}</h1>
    <div style={{display:"flex",gap:"0 5px"}}>
    <a name="" id="" class="btn btn-primary" href="#" role="button" onClick={()=>dispach(Inc(50))}>Inc</a>
    <a name="" id="" class="btn btn-primary" href="#" role="button" onClick={()=>dispach(Dec(10))}>Dec</a>
    </div>
    </div>
    </>
  )
}

export default IncDec