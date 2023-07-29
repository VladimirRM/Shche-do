import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [todos,setTodos] = useState([])
  const [input,setInput] = useState('')
  const [edit,setEdit] = useState(null)
  const [editValue,setEditValue] = useState('')

  const addTodo = ()=>{
    if(input){
      const todo =  {
        text:input,
        id:Date.now(),
        completed: false,
      }
      setTodos([...todos,todo])
       setInput('')
    }
  }
  const removeTodo = (id)=>{
    setTodos([...todos].filter((todo)=>todo.id !==id))
  }
  const editTodo= (id,text)=>{
    setEdit(id)
    setEditValue(text)
  }
  return (
    <div>

      
    </div>
  )
}

export default App
