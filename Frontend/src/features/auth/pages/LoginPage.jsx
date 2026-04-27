// import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import "../styles/form.scss"
import { useState } from "react"
import { useAuth } from "../hooks/useAuth"

const LoginPage = () => {

    const {loading,handleLogin} = useAuth()

     const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")

     const navigate = useNavigate()
    async function submitHandler(e) {
        e.preventDefault()

        await handleLogin(username,password)
        console.log("user logged in")
        navigate("/feed")
     }
     if(loading){
        return (
            <main>
                <h1>Loading......</h1>
            </main>
        )
     }

  return (
    <main>
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <input type="text" value={username} onInput={(e)=>{setUsername(e.target.value)}} name="username" placeholder="enter username" />
        <input type="password" value={password} onInput={(e)=>{setPassword(e.target.value)}} name="password" placeholder="enter password" />
        <button type="submit">Login</button>
        <p>Don't have an account <Link to="/register">Register</Link></p>
      </form>
    </main>
  )
}

export default LoginPage
