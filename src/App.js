import React ,{useState}from 'react'
import './App.css'

const App = () => {
  const [todos,setTodos] = useState([])
  const [inputValue,setInputValue] = useState('')




  const addTodo = ()=>{
    const todo = {
      text: inputValue,
      id:Date.now(),
      completed: false
    }
    setTodos([...todos,todo])
    setInputValue('')
  }
const toggleTodo =(todo,id)=>{
  setTodos([
   ...todos.map((todo)=>todo.id?{...todo,complete:!todo.complete}:{...todo})
  ])
 }

  return (
    <div>
      <input type="text" 
      value={inputValue}
      onChange={e=>setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo)=>(
        <div>
          <div  key={todo.id}className={todo.complete ?'checkBox':''} onClick={()=>toggleTodo(todo.id)}>{todo.text}</div>
        
        </div>
        
      ))}
    </div>
  )
}

export default App
