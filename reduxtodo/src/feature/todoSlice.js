import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id: 1,
    text: 'Cooking'
  }]
}

export const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo);
    }, 
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }

  }
})

export default todoSlice.reducer

export const { addTodo, removeTodo } = todoSlice.actions