import React, { useState } from 'react'

const Conditional = () => {
  const [text, setText] = useState(false);
  const [isLoggedIn, setIsLggedIn] = useState(false);
  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h1>PWC Fullstack</h1>
      <button onClick = {() => setText(!text)}>Show Text</button>
      {text && isLoggedIn && (
        <p>
          This ia a fullstack class A full-stack developer is a type of
          programmer that has a functional knowledge of all techniques,
          languages and systems engineering concepts required in software
          development. The term “full stack” refers to the technologies and
          skills needed to complete a project, with each individual component
          being a stack. Stacks can be mobile, Web or software specific.
          Typically, a software engineer will focus on one part of development,
          either the front end or the back end. The front end includes all
          components associated with the visible parts of an application or
          website while the back end encompasses the underlying databases and
          infrastructure. The full stack is a hybrid of both.
        </p>
      )}

      {isLoggedIn ? (<p>Welcome You Are Logged in</p>) : 
      (<p>you are not logged in yet, please go and login </p>)}
      </div>
  );
}

export default Conditional
