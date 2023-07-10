import { useState } from "react"


const App = () => {
  const [todos,setTodos] = useState([])
  const [inputValue,setInputValue] = useState('')


  const addTodo = ()=> {
    const todo = {
      text: inputValue,

    }
    setTodos({...prev => prev.text})
  }
  return (
    <div>
      <input type="text" onChange={(e)=>setInputValue(e.target.value)} 
      value={inputValue}/>
    </div>
  )
}

export default App
