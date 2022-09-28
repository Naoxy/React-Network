import { useContext, useEffect, useState } from 'react';
import Feed from '../components/Feed';
import CreatePost from '../components/CreatePost';
import '../styles/App.css'
import useLogVariable from '../hooks/useLogVariable';
import UserContext from '../contexts/UserContext';


function HomePage() {
  
  const [posts, setPosts] = useState([])

  const { user } = useContext(UserContext)
  console.log("user", user );

  const [isLoading, setIsLoading] = useState(true)
  //const isLoading = false

  useLogVariable(posts, "List posts")

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await fetch('https://run.mocky.io/v3/77aad4f1-e4f3-4f2e-bc32-24b372e76c55')
    const postsData = await res.json()
    setPosts(postsData)
    setIsLoading(false)
  }, [])

 

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  const addPost = (postText, postPicture) => {
    const newPost = {
      id: Math.floor(1000 * Math.random()),
      author: user.author,
      authorPicture: user.authorPicture,
      text: postText,
      postPicture,
      date: new Date(),
      likes: 0
    }
    setPosts([...posts, newPost])
  }

    const likePost = (id) => {
    const increment = posts.find(p => p.id === id).isLiked ? -1 : 1
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + increment, isLiked: !p.isLiked } : p))
  }


  return (
    <>
        <CreatePost addPost={addPost} />
        <Feed posts={posts} deletePost={deletePost} likePost={likePost} isLoading={isLoading} />
    </>
  )
}

export default HomePage;