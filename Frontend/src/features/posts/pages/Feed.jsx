import { useEffect } from "react"
import Post from "../components/Post"
import "../style/feed.scss" 
import { UsePost } from "../hooks/UsePost"
import { useNavigate } from "react-router"


const Feed = () => {

  const {feed,loading,handleGetFeed,handleLike,handleUnLike} = UsePost()
  const navigate = useNavigate()

  useEffect(() => {
    handleGetFeed()
  }, [])

  if(loading || !feed){
    return (
      <main><h1>Feed is loading......</h1></main>
    )
  }
  
  return (
    <div className="feed-page">
      <div className="posts">
        <div className="nav">
          <h1>Instagram</h1>
          <button onClick={()=>navigate("/createPost")}>Create Post</button>
        </div>
        {
          feed.map((posts,idx) => {
            return (
              // console.log(posts)
              <Post key={idx} caption={posts.caption} id={posts._id} img={posts.imgUrl} handleLike={handleLike} handleUnLike={handleUnLike} isLike={posts.isLiked} user={posts.user.username}/>
              // console.log(posts)
              
            )
          })
        }
      </div>
    </div>
  )
}

export default Feed
