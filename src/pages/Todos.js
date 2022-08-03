// import React, { useState, useEffect } from "react";

// const Todos = () => {
//   const [Todos, setTodos] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((todos) => setPosts(todos));
//   }, []);
//   return (
//     <div>
//       This is my post
//       {Todos.map((Todos, index) => (
//         <h1 key={Todos.id}>{Todos.title}</h1>
//       ))}
//     </div>
//   );
// };

// export default Todos;

import React, { useState, useEffect } from "react";

const ToDos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      let todos = await fetch("https://jsonplaceholder.typicode.com/todos");
      todos = await todos.json();
      setTodos(todos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => res.json())
    //   .then((todos) => setTodos(todos));
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Hi these are my todos</h2>
      {/* <hr /> */}
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Completed</td>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "true" : "false"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ToDos;
