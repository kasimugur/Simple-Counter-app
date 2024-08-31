import { useState } from "react"
import '../css/css/container.css'
export default function Todo() {
  const [value, setValue] = useState('')
  console.log(value)
  return (
    <>
      <div className="container">

        <div className="header">
          <h1>todo list app</h1>
          <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="input" />
        </div>
    
      </div>
    </>
  )
}