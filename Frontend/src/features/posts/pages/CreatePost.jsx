// import React from 'react'
import { useState } from "react"
import "../style/createPost.scss"
import { useRef } from "react"
import { UsePost } from "../hooks/UsePost"
import { useNavigate } from "react-router"

const CreatePost = () => {
    
  const [caption, setCaption] = useState("")
  const postImageInputFieldRef = useRef()
  const navigate = useNavigate()

  const {loading,handleCreatePost} = UsePost()

  async function handleSubmit(e) {
    e.preventDefault()
    const file = postImageInputFieldRef.current.files[0]
    await handleCreatePost(file,caption)
    navigate("/feed")
  }

  
    if(loading){
        return (
            <main>
                <h1>creating post...</h1>
            </main>
        )
    }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <label htmlFor="postImage">Select file</label>
        <input hidden ref={postImageInputFieldRef} type="file" id="postImage" name="postImage"/>
        <input value={caption} name="caption" id="caption" onChange={(e)=>{setCaption(e.target.value)}} type="text" placeholder="enter caption" />
        <button type="submit">Create</button>
      </form>
    </main>
  )
}

export default CreatePost
