import { useState } from "react"
import '../css/css/container.css'
import'../css/css/header.css'
import TodoCard from "./TodoCard"
export default function Todo() {
  const [value, setValue] = useState('')
  console.log(value)
  return (
    <>
      
      <div className="container">
      <div className="header">
        <h1>todo list app</h1>
        <div className="header-body">
        <input value={value} onChange={(e) => setValue(e.target.value)} 
        type="text" className="input"/>
        <select className="select">
        <option value="important">important</option>
        <option value="crucial">crucial</option>
        <option value="ordinary">ordinary</option>
        </select>
        </div>
      </div>
        <ul>
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </ul>
      </div>
    </>
  )
}