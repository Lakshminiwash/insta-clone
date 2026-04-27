
const Post = ({caption,user,img,like}) => {

  return (
    <div className="post">
                    <div className="user">
                        <div className="img">
                            <img src="https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <p>{user}</p>
                    </div>
                    <img src={img} alt="" />
                    <div className="icons">
                        <div className="left">
                            <i className="ri-heart-3-line like"></i>
                            <i className="ri-chat-3-line comment"></i>
                            <i className="ri-send-ins-line share"></i>
                        </div>
                        <div className="right">
                            <i className="ri-bookmark-line bookmarked"></i>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="caption">{caption}</p>
                    </div>
                </div>
  )
}

export default Post
