import { useEffect } from "react"
import Post from "../components/Post"
import "../style/feed.scss" 
import { UsePost } from "../hooks/UsePost"


const Feed = () => {

  const {feed,loading,handleGetFeed} = UsePost()

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
        {
          feed.map((posts,idx) => {
            return (
              // console.log(posts.caption)
              <Post key={idx} caption={posts.caption} img={posts.imgUrl} like={posts.isLiked} user={posts.user.username}/>
              // console.log(posts)
              
            )
          })
        }
      </div>
    </div>
  )
}

export default Feed
