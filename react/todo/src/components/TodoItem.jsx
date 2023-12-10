import React from 'react'
import { useTodo } from '../context'
import { useState } from 'react'

function TodoItem({todo}) {
    const [istodoEditable,setIstoeditable] = useState(false)
    const [todomsg,setTodomsg]=useState(todo.todo)
    const {updateTodo,toggleCompleted,deleteTodo}=useTodo()

    const editTodo=()=>{
        updateTodo((todo.id,{...todo,todo:todomsg}))
        setIstoeditable(false)
    }
    const toggleComplete=()=>{
        toggleCompleted(todo.id)
    }
  return (
    <>
    <div className='flex' style={{}}>
        <input type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
        />
        <input 
        type="text"
        value={todomsg}
        onChange={(e)=>setTodomsg(e.target.value)}
        readOnly={!istodoEditable}
        />
        
        <button
        onClick={()=>{
            if(todo.completed)return;
            if(istodoEditable){
                editTodo();
            }else setIstoeditable((prv)=>!prv)
        }}
        disabled={todo.completed}
        >{istodoEditable?"save":"edit"}</button>
        <button
        onClick={()=>deleteTodo(todo.id)}
        >remove</button>
    </div>
    </>
  )
}

export default TodoItem