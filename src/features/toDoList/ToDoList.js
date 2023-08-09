import { List } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const todos = useSelector((state) => state.todos)

  return (
    <List sx={{ width:"100%", pt:"20px"}}>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </List>
  )
}

export default ToDoList