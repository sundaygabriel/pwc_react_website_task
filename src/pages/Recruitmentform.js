import React, { useState } from "react";

function Recruitmentform() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  //     const handleChange = (event) => {
  //         const name = event.target.name;
  //         const value = event.target.value;
  //         setName((values) => ({ ...values, [name]: value }));
  //         setAge((values) => ({ ...values, [age]: value }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Please enter Values");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Recruitmentform;
