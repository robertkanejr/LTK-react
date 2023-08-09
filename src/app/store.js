import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from '../features/toDoList/toDoSlice'
import formReducer from '../features/form/formSlice'

export default configureStore({
  reducer: {
    todos: toDoReducer,
    form: formReducer,
  },
})