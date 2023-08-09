import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Box, Button, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../toDoList/toDoSlice';
import { updateField, resetForm, setErrors, setIsValid } from './formSlice';

const AddToDoForm = () => {
  const dispatch = useDispatch()
  const form = useSelector(state => state.form)
  const todos =useSelector(state => state.todos)

  const handleChange = (e) => {
    dispatch(updateField({value: e.target.value}))

    if (e.target.value.length < 5 && !form.errors.newToDo) {
      dispatch(setErrors({newToDo: 'Must be at least 5 characters'}))
      if (form.isValid === true) dispatch(setIsValid({value: false})) 
    } else if (e.target.value.length >= 5 && form.errors.newToDo) {
      dispatch(setErrors({newToDo: ''}))
      if (form.isValid === false) dispatch(setIsValid({value: true})) 
    }
  }

  const handleSubmit = () => {
    dispatch(addToDo({title: form.newToDo}))
    dispatch(resetForm(form.newToDo))
  }

  return (
    <>
      <h1>To Do List</h1>
      <Box sx={{width: "100%", pb: "20px"}}>
      <Formik
        initialValues={{form}}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '78%'}}>
              <Field 
                name="newToDo"
                type="text"  
                id={(todos.length + 1).toString()}
                placeholder="Add Item Here" 
                as={TextField} 
                label="To Do"
                value={form.newToDo} 
                onChange={handleChange}
                sx={{width:"80%"}}
                size="small"
              />
              <Typography sx={{color:'red', fontWeight:'bold', height: '20px', pt: '10px'}}>{form.errors.newToDo}</Typography>
            </Box>
            <Button 
              type="submit" 
              variant="contained" 
              size="small" 
              endIcon={<AddIcon />}
              disabled={!form.isValid}
              sx={{alignSelf:"flex-start", width: "100px", height: "40px" }}
            >
            Add
            </Button>
          </Box>
        </Form>
        
      </Formik>
      </Box>
    </>
  )
}

export default AddToDoForm
