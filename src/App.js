import React,{useState} from 'react'
import './App.css'
const App = () => {
  const [ todos,setTodos] = useState([])
  const [ input,setInput] = useState('')
  const [ edit,setEdit] = useState(null)
  const [ editValue,setEditValue] = useState(null)


  const  addTodo = ()=>{
    if(input.trim().length){
      const todo = {
        text: input,
        id:Date.now(),
        completed: false,
      }
      setTodos([...todos,todo])

      setInput('')
    }
  }
  const removeTodo = (id)=>{
    setTodos([...todos].filter(todo=>todo.id !==id))
  }

  const editTodo = ( id,text)=>{
    setEdit(id)
    setEditValue(text)
  }
  const saveTodo = (id )=>{
       const editTodo = [...todos].map(todo=>{
        id(todo.id === id)
          todo.text = editValue
        
         return todo
       })
       setTodos(editTodo)
       setEdit(null)
  }
  const toggleTodo = (id)=>{
    setTodos([...todos].map(todo=>{
      if(todo.id !== id)
      return todo
      return {...todo,
      completed: !todo.completed}
    }))
  }


  return (
    <div>
      <input type="text"
      value={input}
      onChange={e=> setInput(e.target.value)} />
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo)=>(
        <div>
          {edit ===todo.id ? 
        <div>
          <input type="text"
          value={editValue}
          onChange={e=> setEditValue(e.target.value)}
          />
          
        </div>  :
        <div>
             {todo.text}
          <button onClick={()=>removeTodo(todo.id)}>Delete</button>
          <button onClick={()=>editTodo(todo.id, todo.text)}>Edit</button>
          <input type="checkbox"
           checked={todo.completed}
           onChange={()=> toggleTodo(todo.id)}
          />
        </div>
        }
       
        </div>
      ))}
    </div>
  )
}

export default App
