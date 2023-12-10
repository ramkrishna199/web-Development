import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../store/reducers/todoSlice';



function AddTodo() {

    const [input,setInput]=useState("")
    const dispatch=useDispatch()
  return (
    <>
        <div class="mb-3">
          <input type="text"
            className="form-control" aria-describedby="helpId"
            placeholder="Add Todos...."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            
        </div>
        <button 
        onClick={(e)=>{
          e.preventDefault()
          dispatch(addTodo(input))
          setInput("")
          }}
        type='submit'>Add</button>
    </>
    
  )
}

export default AddTodo