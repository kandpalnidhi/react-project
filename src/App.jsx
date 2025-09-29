import { useState } from 'react'
import './App.css'
import Clock from './Clock'

function App() {
  const [color,setColor]=useState('green')
  return (
    <div>
      <Clock color={color}/>
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value={"Red"}>Red</option>
        <option value={"Yellow"}>Yellow</option>
        <option value={"Orange"}>orange</option>
        <option value={"Green"}>Green</option>
        
      </select>
    </div>
  )
}

export default App
