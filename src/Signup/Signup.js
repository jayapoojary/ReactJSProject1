import React from 'react'
import { useState } from 'react';
const Signup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const data = [
    {
      name: 'abc',
      password: 'abc'
    }
  ]
  const [error, setError] = useState("")
  const handleSubmit = () => {
    const userExists = data.some(e => e.name === name)
    if(userExists)
    {
      setError("User Exists")
    }
    else{
      setError("")
    }
  };
  return (
    <div style={{marginTop: '65px'}}>
      Username:{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      Password:{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginLeft: "5px", marginTop: "13px" }}
      ></input>
      <p></p>
      <button
        style={{
          color: "blue",
          marginLeft: "95px",
          marginTop: "35px",
          height: "35px",
          width: "65px",
          backgroundColor: "blue",
          color: "white",
          border: "0px",
        }}
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  )
}

export default Signup