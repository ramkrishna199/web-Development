import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {
    const[todo,setTodo]=useState()
    const {addTodo} =useTodo()

    const add=(e)=>{
        e.preventDefault()

        if(!todo) return

        addTodo({
            todo,
            completed:false
        })
        setTodo("")
    }
  return (
    <>
    <form className=' flex' onSubmit={add}>
    <input 
    type="text"
    placeholder='Write Todo....'
     value={todo} 
     onChange={(e)=>setTodo(e.target.value)}
     />
    <button type="submit">Add</button>
    </form>
    </>
  )
}

export default TodoForm