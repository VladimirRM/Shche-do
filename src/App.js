import React from 'react'
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
    }
  }


  return (
    <div>
      
    </div>
  )
}

export default App
