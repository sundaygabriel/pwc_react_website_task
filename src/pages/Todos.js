import React, { useState, useEffect } from "react";

const Todos = () => {
  const [Todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => setPosts(todos));
  }, []);
  return (
    <div>
      This is my post
      {Todos.map((Todos, index) => (
        <h1 key={Todos.id}>{Todos.title}</h1>
      ))}
    </div>
  );
};

export default Todos;
