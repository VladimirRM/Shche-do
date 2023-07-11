import { useState } from "react"
import './App.css'


const App = () => {
  const [todos,setTodos] = useState([])
  const [inputValue,setInputValue] = useState('')
  const [edit,setEdit] = useState(null)
  const [editValue,setEditValue] = useState('')
  const [completed,setCompleted] = useState(false)
  
  


  const addTodo = ()=> {
    const todo = {
      text: inputValue,
      id:Date.now(),

    }
    setTodos([...todos, todo ])
    setInputValue('')
  }
  const removeTodo = (id)=>{
    setTodos([...todos.filter((todo)=> todo.id !== id)])
  }
  const editTodo = (id,text)=>{
       setEdit(id)
       setEditValue(text)
  }
  const saveTodo = (id)=>{
     let editTodo = [...todos].map((todo)=>{
      if(todo.id == id){
          todo.text = editValue
      }
        return todo
    })
    setTodos(editTodo)
    setEdit(null)
  }
  return (
    <div>
      <input type="text" onChange={(e)=>setInputValue(e.target.value)} 
      value={inputValue}/>
      <button onClick={addTodo}>Add todo</button>
   

            <div>
                 <div>{todos?.map((todo)=>(
            <div key={todo.id}  >
             {edit === todo.id ? 
            <div>
              <input type="text"
              value={editValue}
              onChange={(e)=>setEditValue(e.target.value)}
              />
              <button onClick={()=> saveTodo(todo.id)}>Save</button>
            </div> :
            <div >
                     {todo.text}
          <button onClick={()=>editTodo(todo.id,todo.text)}>Edit</button>
          <button onClick={()=>removeTodo(todo.id)}>Delete</button>
          <input  type="checkbox"  onClick={()=>setCompleted(!completed)} 
             
          />
            </div>
            }       
       
        </div>

      ))}</div>
            </div>
            

    </div>
  )
}

export default App
