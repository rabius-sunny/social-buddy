import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const SinglePost = () => {

    const { postId } = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => setPost(res.data))
            .catch(error => console.log(error.message))
    }, [postId])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => setComments(res.data))
            .catch(error => console.log(error.message))
    }, [postId])

    let filteredComment = comments.filter(comment => comment.postId == postId)
    console.log(filteredComment)

    let { title, body } = post
    return (
        <div>
            <section>
                <div className="container">
                    <div className="shadow-sm p-5 post">
                        <h1 className="text-center">{title}</h1>
                        <p>{body}</p>
                    </div>
                    <div className="comments py-5">
                        <h3 className="text-info">Total Comments : {filteredComment.length}</h3>
                        <hr className="text-info pb-1" />
                        {
                            filteredComment.map(comment => <div className="w-50">
                                <h5>{comment.name}</h5>
                                <p>{comment.body}</p>
                                <p><small>{comment.email}</small></p>
                                <hr />
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SinglePost
