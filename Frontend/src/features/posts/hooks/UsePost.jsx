import { useContext } from "react"
import { PostContext } from "../Post.context"
import { getFeed } from "../services/postApi"


export const UsePost = ()=>{
    const context = useContext(PostContext)
    const {loading,setLoading,feed,setFeed} = context

    const handleGetFeed = async ()=>{
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts)
        setLoading(false)
    }

    return {loading,feed,handleGetFeed}
}