import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const EditProfile = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState()
  const [Data, setData] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    const getAlldata = async () => {
      try {
        const response = await axios.get('http://localhost:8087/login/')
        setData(response.data)
        console.log("Data ",Data)
      }
      catch(error) 
      {
        console.log(error)
      }
    }
    getAlldata()
  }, [])
  const handleSubmit = () => {
    console.log(Data)
    Data.map((e) => (
      <img src={e.Photo} alt="Image" />
    ))
  }


  return (
    <div>
      <div>
      <label>
      user Name {" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input> 
      </label>
      </div>

      <div>
      <label> Old password {" "}
      <input
        type={"text"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginLeft: "5px", marginTop: "13px",}}
      ></input>
      </label>
      </div>
      <div>
        <label>
        New Password{" "}
      <input
        type={"text"}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={{ marginLeft: "5px", marginTop: "13px",}}
      ></input>
        </label>
      </div>
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
        Update
      </button>
      <p style={{fontSize: "13px"}}>{errorMessage}</p>
    </div>
  )
}

export default EditProfile