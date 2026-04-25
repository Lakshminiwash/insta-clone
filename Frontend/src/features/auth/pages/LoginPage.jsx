// import React from 'react'
import { Link } from "react-router"
import "../styles/form.scss"
import axios from "axios"
import { useState } from "react"

const LoginPage = () => {

     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")

    async function submitHandler(e) {
        e.preventDefault()

        axios.post("http://localhost:3000/api/auth/login",{
            email,
            password
        },{withCredentials:true})
        .then(
            res =>{
                console.log(res.data)
                setEmail(""),
                setPassword("")
            }
        )
     }

  return (
    <main>
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <input type="email" value={email} onInput={(e)=>{setEmail(e.target.value)}} name="email" placeholder="enter email" />
        <input type="password" value={password} onInput={(e)=>{setPassword(e.target.value)}} name="password" placeholder="enter password" />
        <button type="submit">Login</button>
        <p>Don't have an account <Link to="/register">Register</Link></p>
      </form>
    </main>
  )
}

export default LoginPage
