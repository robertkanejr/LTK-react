import React from 'react'
import AddToDoForm from '../features/form/AddToDoForm'
import ToDoList from '../features/toDoList/ToDoList'
import { Chip, Divider } from '@mui/material'

const ToDo = () => {
  return (
    <>
      <AddToDoForm />
      <Divider sx={{width:'100%'}}> <Chip label="To Do Items" /> </Divider>
      <ToDoList />
    </>
  )
}

export default ToDo