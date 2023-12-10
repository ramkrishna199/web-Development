import "./App.css";
import { TodoProvider } from "./context";
import { useState } from "react";
import { useEffect } from "react";
import {TodoForm}  from './components/index'
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    updateTodo((prev) =>
      prev.map((prevtoto) =>
        prevtoto === id
          ? { ...prevtoto, completed: !prevtoto.completed }
          : prevtoto
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div>
      <TodoForm/>
      </div>
{
  todos.map((todo)=>(
    <div key={todos.id}>
<TodoItem todo={todo}/>
    </div>
  ))
}
    </TodoProvider>
  );
}

export default App;
