import React from 'react'
import { removeTodo } from '../feature/todoSlice'
import { useDispatch, useSelector } from 'react-redux'


const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </div>
  )
}

export default Todos