import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [todos,setTodos] =useState([])
  const [inputValue,setInputValue] =useState('')
  const [edit,setEdit] =useState(null)
  const [editValue,setEditValue] =useState('')
  // const [toggleCompleted,setToggleCompleted] =useState(false)

const addTodo = ()=>{
  const todo = {
    text: inputValue,
    id:Date.now(),
    completed: false
  }
  setTodos([...todos,todo])
  setInputValue('')
}
const removeTodo = (id)=>{
  setTodos([...todos].filter((todo)=>todo.id !==id))
}
const editTodo = (id,text)=>{
  setEdit(id)
  setEditValue(text)
}

const saveTodo =(id)=>{
  const editTodo = [...todos].map((todo)=>{
         if(todo.id === id){
          todo.text = inputValue
         }
         return todo
  })
  setTodos(editTodo)
  setEdit(null)
}

const toggleTodo = (id)=>{
  setTodos(todos.filter((todo)=>{
    if(todo.id===id){
      todo.completed = !todo.completed
    }
    return todo
  }))
}

  return (
    <div>
      <input type="text"
      onChange={(e)=>setInputValue(e.target.value)}
      value={inputValue}
      />
      <button onClick={addTodo}>Add</button>

      <div>
        {todos.map(todo=>(

            <div key={todo.id}>
            {edit === todo.id ?
             <div>
              <input type="text"
              onChange={(e)=>setEditValue(e.target.value)}
              value={editValue} />
              <button onClick={()=>saveTodo(todo.id)}>Save</button>
             </div>  :
             <div style={{ textDecoration: !todo.completed ? 'line-through': 'null'}}>
                 {todo.text}
                 <button onClick={()=>removeTodo(todo.id)}>Delete</button>
                 <button onClick={()=>editTodo(todo.id,todo.text)}>Edit</button>
                 <input type="checkbox" 
                  onChange={()=> toggleTodo(todo.id)}
                 />
             </div>
          }
            
            </div>

        ))}
      </div>
    </div>
  )
}

export default App
