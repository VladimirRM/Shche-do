import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [todos,setTodos]= useState([])
  const [input,setInput]= useState('')
  const [edit,setEdit]= useState(id)
  const [editValue,setEditValue]= useState('')

  const addTodo = ()=>{
    if(input){
      const todo = {
        text: input,
        id:Date.now(),
        completed: false,
      }
      setTodos([...todos, todo])
      setInput('')
    }
  }
  const removeTodo = (id)=>{
        setTodos([...todos].filter((todo)=>todo.id !==id))
  }
  const editTodo = (id,text)=>{
    setEdit(null)
    setEditValue(text)
  }
  const saveTodo = (id)=>{
    const editTodo = [...todos].map((todo)=>{
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
      
    </div>
  )
}

export default App
