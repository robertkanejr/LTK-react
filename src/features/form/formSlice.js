import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
  name: 'form',
  initialState: {
    newToDo: '',
    isValid: false,
    errors: {
      newToDo: ''
    },
  },
  reducers: {
    updateField: (state, action) => {
      state.newToDo = action.payload.value
    },
    setIsValid: (state, action) => {
      state.isValid = action.payload.value
    },
    setErrors: (state, action) => {
      state.errors = action.payload
    },
    resetForm: state => {
      state.newToDo = ''
      state.isValid = false
      state.errors = {
        newToDo: ''
      }
    }
  }
})

export const {updateField, setIsValid, setErrors, resetForm} = formSlice.actions

export default formSlice.reducer