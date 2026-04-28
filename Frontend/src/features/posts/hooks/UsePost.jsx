import { useContext } from "react"
import { PostContext } from "../Post.context"
import { createPost, getFeed, likePost, unLikePost } from "../services/postApi"


export const UsePost = ()=>{
    const context = useContext(PostContext)
    const {loading,setLoading,feed,setFeed,post,setPost} = context

    const handleGetFeed = async ()=>{
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts)
        setLoading(false)
    }

    const handleCreatePost = async (imageFile,caption)=>{
        setLoading(true)
        const data = await createPost(imageFile,caption)
        setFeed([data.post,...feed])
        setLoading(false)
    }

    const handleLike = async (post)=>{
        await likePost(post)
        await handleGetFeed()

    }

    const handleUnLike = async (post) => {

        await unLikePost(post)
        await handleGetFeed()

    }

    return {loading,feed,handleGetFeed,handleLike,handleUnLike,handleCreatePost}
}