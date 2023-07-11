import React,{useState} from 'react'

const App = () => {
  const [todos,setTosos] = useState([])
  const [inputValue,setInputValue] = useState('')
  const [edit, setEdit] = useState(null)
  const [editValue,setEditValue] = useState('')
  return (
    <div>
      <input type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      
    </div>
  )
}

export default App
