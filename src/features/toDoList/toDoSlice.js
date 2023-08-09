import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "todos",
  initialState: [
    {id: 1, title: "Set Up Project", completed: true},
    {id: 2, title: "Fix File Structure", completed: true},
    {id: 3, title: "Add Routing", completed: true},
    {id: 4, title: "Add and Configure Redux", completed: true},
    {id: 5, title: "Add Styling", completed: true},
    {id: 6, title: "Add Hosting", completed: true},
    {id: 7, title: "Meet Hiring Manager", completed: false},
  ],
  reducers: {
    addToDo: (state, action) => {
      const newToDo = {
        id: (state.length + 1).toString(),
        title: action.payload.title,
        completed: false
      }
      state.push(newToDo)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
    },
    deleteToDo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    }
  }
})

export const {addToDo, toggleComplete, deleteToDo} = toDoSlice.actions

export default toDoSlice.reducer