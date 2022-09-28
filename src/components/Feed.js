import Post from './Post'
import { ReactComponent as EmptyImageSvg } from '../images/empty.svg'


function Feed({ posts, deletePost, likePost, isLoading }) {

	posts.sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime())

	return isLoading ?
		(
			<div>Chargement...</div> 
		) : (
			posts.length > 0 ?
		(
			posts.map(p => <Post key={p.id} postData={p} deletePost={deletePost} likePost={likePost} />)
		) : (
			<>
				<h3 align="center">
					<EmptyImageSvg width="300" height="300" />
					<div>
						Aucun post pour le moment
					</div>
				</h3>
			</>
			)
		)
		
}
export default Feed