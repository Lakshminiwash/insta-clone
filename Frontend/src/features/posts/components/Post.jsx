
const Post = ({ caption, user,id, img, isLike, handleLike, handleUnLike }) => {

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
                    <button 
                    onClick={() => {isLike ? handleUnLike(id) : handleLike(id) }}
                    className={isLike ? "like" : ""}>
                        <i className="ri-heart-3-line"></i>
                    </button>
                    <button>
                        <i className="ri-chat-3-line comment"></i>
                    </button>
                    <button>
                        <i className="ri-send-ins-line share"></i>
                    </button>
                </div>
                <div className="right">
                    <button>
                        <i className="ri-bookmark-line bookmarked"></i>
                    </button>
                </div>
            </div>
            <div className="bottom">
                <p className="caption">{caption}</p>
            </div>
        </div>
    )
}

export default Post
