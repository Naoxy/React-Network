import { useState, useEffect, useContext } from 'react'
import useLogVariable from '../hooks/useLogVariable'
import useLocalStorage from '../hooks/useLocalStorage'
import UserContext from '../contexts/UserContext'

function CreatePost({ addPost }) {

	const [postText, setPostText] = useLocalStorage('', "react_network_new_post_text")
	const [postPicture, setPostPicture] = useState('')

	const { user } = useContext(UserContext)

	const onPostTextChangeHandler = (event) => {
		setPostText(event.target.value)
	}
	const onPostPictureChangeHandler = (event) => {
		setPostPicture(event.target.value)
	}

	const createPostHandler = (event) => {
		addPost(postText, postPicture)
		setPostText('')
		setPostPicture('')
	}

	useEffect(() => {
		console.log("Chargement du Composant fonctionnel");
		return () => console.log("Démontage du Composant fonctionnel");
	}, [])

	useLogVariable(postText, "Text nouveau post")

	const postHasText = postText.trim() !== ''

	return (
		<div className="post">
			<div className="createpost-row">
				<img src={user.authorPicture} style={{ borderRadius: '50%', width: 40}} alt=""/>
				<input type="text" onChange={onPostTextChangeHandler} value={postText} placeholder="Quoi de neuf aujourd'hui ?" />
			</div>
			<div className="createpost-row">
				<div>Photo :</div>
				<input type="text" onChange={onPostPictureChangeHandler} value={postPicture} placeholder="URL de la photo" />
			</div>
			{postHasText && (
				<div className="createpost-row">
					<button className="btn" onClick={createPostHandler}>Publier</button>
				</div>
			)}

		</div>
	)
}

export default CreatePost
