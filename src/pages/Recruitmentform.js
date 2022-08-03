
// import React, { useState } from "react";
// import "./Recruitmentform.css";

// const Recruitmentform = () => {
//   const initialState = { username: "", email: "", password: "" };
//   const [inputvalue, setInputvalue] = useState({ initialState });
//   const [errorCheck, setErrorCheck] = useState({});
//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInputvalue((values) => ({ ...values, [name]: value }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrorCheck(validateInput(inputvalue));
//   };

//   const validateInput = (values) => {
//     let error = {};
//     if (!values.username) {
//       error.username = "Username is required";
//     }
//     if (!values.email) {
//       error.email = "Email is required";
//     }
//     if (!values.password) {
//       error.password = "Password is required";
//     }

//     return error;
//   };

//   return (
//     <div>
//       <h1> Recruitment form</h1>
//       <form id="my-form" onSubmit={handleSubmit}>
//         <h1>Add User</h1>
//         <div>
//           <label htmlFor="username">User Name:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={inputvalue.username}
//           />
//           <p style={{ color: "red" }}>{errorCheck.username}</p>
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             value={inputvalue.email}
//             onChange={handleChange}
//           />
//           <p style={{ color: "red" }}>{errorCheck.email}</p>
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={inputvalue.password}
//           />
//           <p style={{ color: "red" }}>{errorCheck.password}</p>
//         </div>
//         <input className="btn" type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// };
// export default Recruitmentform;

import React, { useState } from "react";

const Recruitmentform = () => {
  const initialState = { username: "", email: "", password: "" };

  const [inputValue, setInputValue] = useState({ initialState });
  const [errorCheck, setErrorCheck] = useState({});

  const [popMessage, setPopaMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validateInput(inputValue)
    setErrorCheck(validateInput(inputValue));
    localStorage.setItem("storagevalue", JSON.stringify(inputValue));
  };

  const validateInput = (value) => {
    let error = {};
    if (!value.username) {
      error.username = "Username";
    }
    if (!value.email) {
      error.email = "email";
    }
    if (!value.password) {
      error.password = "password";
    } else {
      if (value.password.length <= 6 || value.password.length >= 20) {
        error.password = "wrong password, pass should be btw 7-20 chars";
      }

      if (!value.email.includes("@")) {
        error.email = "email must contain @";
      }
    }

    if (!error.password && !error.email && !error.username) {
      setPopaMessage("true");
    }
    return error;
  };

  return (
    <section className="container">
      {popMessage && <div className="pop">Successful </div>}

      <form id="my-form" onSubmit={handleSubmit}>
        <h1>Recruitment Form</h1>
        <div className="msg"></div>
        <div>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="username"
            value={inputValue.username}
            name="username"
            onChange={handleChange}
          />
          <p>{errorCheck.username}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={inputValue.email}
            name="email"
            onChange={handleChange}
          />
          <p>{errorCheck.email}</p>
        </div>

        <div>
          <label htmlFor="email">Password:</label>
          <input
            type="password"
            id="password"
            value={inputValue.password}
            name="password"
            onChange={handleChange}
          />
          <p>{errorCheck.password}</p>
        </div>
        <button type="submit" onSubmit={handleSubmit}>
          submit
        </button>
        {/* <input className="btn" type="submit" value="Submit" /> */}
      </form>
    </section>
  );
};

export default Recruitmentform;

