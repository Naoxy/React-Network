/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import moment from 'moment'


function Post({ postData, deletePost, likePost }) {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <div className='post'>

      <div className="post-header">
        <div className="post-header_left">
          <img className="post-profilepic" src={postData.authorPicture} /><br />
          <div>
            <div className="post-author">{postData.author}</div>
            <div className="post-time">{moment(postData.date).format('HH:mm')}</div>
          </div>
        </div>

        <div className="post-menu" onClick={toggleMenu}>
          ...
          <div className={`post-popup ${showMenu ? '' : 'hidden'}`} onClick={() => deletePost(postData.id)}>Supprimer</div>
        </div>

      </div>

      <div className="post-text">
        {postData.text}
      </div>

      <div className="post-picture">
        <img src={postData.postPicture} />
      </div>

      <div className="post-footer">

        <span onClick={() => likePost(postData.id)} className={`post-likes ${postData.isLiked ? 'liked' : ''}`}>
          <span className="post-thumb">👍</span>
          <span>{postData.likes}</span>
        </span>

      </div>

    </div>
  )
}

export default Post;