import React,{useState} from 'react'
import './App.css'


const App = () => {
  const [todos,setTodos ] = useState([])
  const [inputValue,setInputValue ] = useState('')
  const [edit,setEdit ] = useState(null)
  const [editValue,setEditValue ] = useState('')

  const addTodo = ()=>{
    const todo = {
      text: inputValue,
      id:Date.now()
    }
     setTodos([...todos,todo])
     setInputValue('')
    }

     const removeTodo = (id)=>{
        setTodos([...todos].filter((todo)=>todo.id !== id))
     }
     const editTodo = (id,text)=>{
      setEdit(id)
      setEditValue(text)
     }

     const saveTodo = (id)=>{
      const editTodo = [...todos].map(todo=>{
        if(todo.id === id){
          todo.text = editValue
        }
        return todo
      })
      setTodos(editTodo)
      setEdit(null)
     }

  return (
    <div>
      <input type="text"
      onChange={(e)=>setInputValue(e.target.value)}
      value={inputValue}
     />
     <button onClick={addTodo}>Add todo</button>
     <div>
      {todos.map((todo)=>(
     <div>
      {edit === todo.id ? 
    <div>
      <input type="text"
      onChange={(e)=>setEditValue(e.target.value)}
      value={editValue}
      />
      <button onClick={saveTodo}>Save</button>
    </div>:
    <div>
         <div key={todo.id}>{todo.text}
        <button onClick={()=>removeTodo(todo.id)}>Delete</button>
        <button onClick={()=>editTodo(todo.id)}>Edit</button>
         </div>
    </div>  
    }
     </div>
        
      ))}

     </div>
      
    </div>
  )
}

export default App
