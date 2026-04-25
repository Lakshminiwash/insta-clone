// import React from 'react'
import { Link } from "react-router"
import axios from "axios";
import "../styles/form.scss"
import { useState } from "react";

const RegisterPage = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/register",{
      username,
      email,
      password
    },{
      withCredentials:true
    })
    .then(res=>{
      console.log(res.data)
      setUsername("") 
      setEmail("")
      setPassword("")
    })
    
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type="text" value={username} onInput={(e)=>{setUsername(e.target.value)}} name="username" placeholder="enter username" />
        <input type="email" value={email} onInput={(e)=>{setEmail(e.target.value)}} name="email" placeholder="enter email" />
        <input type="password" value={password} onInput={(e)=>{setPassword(e.target.value)}} name="password" placeholder="enter password" />
        <button type="submit">Register</button>
        <p>Don't have an account <Link to="/login">Login</Link></p>
      </form>
    </main>
  )
}

export default RegisterPage
