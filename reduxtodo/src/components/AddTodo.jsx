import React, { useState } from "react";
import { addTodo } from "../feature/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addTodoHandler(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your Todo tasks...."
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddTodo;
