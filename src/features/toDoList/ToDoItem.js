
import React from 'react'
import { Button, ListItem, ListItemIcon, ListItemText, Checkbox } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete"
import { useDispatch } from 'react-redux'
import { deleteToDo, toggleComplete } from './toDoSlice'

const ToDoItem = ({id, title, completed}) => {
  const dispatch = useDispatch()

  const handleCompleteClick = () => {
    dispatch(toggleComplete({id: id, completed: !completed}))
  }

  const handleDeleteClick = () => {
    dispatch(deleteToDo({id: id}))
  }

  return (
    <ListItem divider={true} alignItems="center">
      <ListItemIcon>
        <Checkbox checked={completed} onChange={handleCompleteClick} />
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
      <Button 
        sx={{width: "100px", height: "40px" }} 
        variant="contained" 
        color="error" 
        size="small" 
        startIcon={<DeleteIcon />} 
        onClick={handleDeleteClick}
      >
      Delete
      </Button>
    </ListItem>
  )
}

export default ToDoItem