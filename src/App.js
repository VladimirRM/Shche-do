import React,{useState} from 'react'
import './App.css'

const App = () => {


  const [todos,setTodos]= useState([])
  const [input,setInput]= useState('')
  const [edit,setEdit]= useState(null)
  const [editValue,setEditValue]= useState('')

  const addTodo = ()=>{
    if(input.trim().length){
      const todo = {
        text: input,
        id: Date.now(),
        completed: false,
      }
      setTodos([...todos,todo])
      setInput('')
    }
  }
  const removeTodo = (id)=>{
    setTodos([...todos].filter((todo)=>todo.id !==id))
  }

  const editTodo = ( id,text)=>{
    setEdit(id)
    setEditValue(text)
  }

  const saveTodo = (id)=>{
    const editTodo = [...todos].map((todo)=>{
      if( todo.id === id){
        todo.text = editValue
      }
      return todo
    })
    setTodos(editTodo)
    setEdit(null)
  }

  const toggleTodo = (id)=>{
    setTodos([...todos].map((todo)=>{
      if( todo.id !== id)
      return todo
      return {...todo,
        completed: !todo.completed
      }
    }))
  }
  return (
    <div>
      <input type='text'
      onChange={e=>setInput(e.target.value)}
      value={input}
      />
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo)=>(
        <div>
          {edit === todo.id ?
        <div>
          <input type="text"
          onChange={e=>setEditValue(e.target.value)}
          value={editValue}
          />
        </div>  :
        <div>
                {todo.text}
          <button onClick={()=>removeTodo(todo.id)}>Delete</button>
          <button onClick={()=>editTodo(todo.id)}>Edit</button>
        </div>
        }
        </div>
      ))}
    </div>
  )
}

export default App
