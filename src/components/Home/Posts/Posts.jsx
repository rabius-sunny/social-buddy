import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Post from "../../Shared/Post/Post"

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => setPosts(data.data))
            .catch(error => console.log(error.message))
    }, [])

    let tenPost = posts.slice(0, 15)
    console.log(tenPost.length)
    return (
        <section className="posts">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 g-4">
                    {
                        tenPost.map(post => {
                            let { title, body, userId, id } = post
                            return <Post title={title} body={body} userId={userId} id={id} />
                        })
                    }
                </div>

            </div>
        </section >
    )
}

export default Posts
