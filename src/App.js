import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [todos,setTodos] = useState([])
  const [inputValue,setInputValue] = useState('')
  const [edit, setEdit] = useState(null)
  const [editValue,setEditValue] = useState('')

  const addTodo = ()=>{
    const todo = {
      text: inputValue,
      id:Date.now(),
      completed: false,
    }
    setTodos([...todos,todo])
    setInputValue('')
  }
  return (
    <div>
      <input type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <div>{todos.map((todo)=>(
        <div>{todo.text}</div>
      ))}</div>
      
    </div>
  )
}

export default App
