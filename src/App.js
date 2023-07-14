import React ,{useState} from 'react'
import "./App.css"

const App = () => {


  const [todos,setTodos]= useState([])
  const [inputValue,setInputValue]= useState('')
  const [edit, setEdit]= useState(null)
  const [editValue, setEditValue]= useState('')

  return (
    <div>
      <input type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      
    </div>
  )
}

export default App
