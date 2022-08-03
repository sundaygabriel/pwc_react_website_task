import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

export const Loginpage = () => {
  // const [name, setName] = useState({ username: "" });
  // const [age, setAge] = useState({})

  // const handleSubmit = (e) => {
  //     e.preventDefault()
        
  // }
  return (
    <div>
      <section className="container">
        <form id="my-form">
          <h1>Add User</h1>
          <div className="msg"></div>
          <div>
            <label htmlFor="name">Email:</label>
            <input type="text" id="email" />
          </div>
          <div>
            <label htmlFor="email">Password:</label>
            <input type="text" id="password" />
          </div>
          <input className="btn" type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default Loginpage;
