import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [todos,setTodos] = useState([])
  const [inputValue,setInputValue] = useState('')
  const [edit,setEdit] = useState(null)
  const [editValue,setEditValue] = useState('')


const addTodo = ()=> {
  const todo = {
    text: inputValue,
    id:Date.now(),
    // completed: false,
  }
  setTodos([...todos,todo])
  setInputValue('')
}
const removeTodo = (id)=> {
     setTodos([...todos].filter(todo=>todo.id !==id))
}
const editTodo = (id,text)=>{
  setEdit(id)
  setEditValue(text)
}

  return (
    <div>
      <input type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>ADD</button>
      <div>
        {todos.map((todo)=>(
          <div key={todo.id}>{todo.text}
          <button onClick={()=>removeTodo(todo.id)}>Delete</button>
          <button onClick={()=>editTodo(todo.id,todo.text)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
