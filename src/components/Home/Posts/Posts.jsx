import axios from "axios"
import { useEffect, useState } from "react"
import PostPagination from '../../Shared/Pagination/PostPagination'

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => setPosts(data.data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <section className="posts">
            <div className="container">
                <div>
                    <PostPagination
                        data={posts}
                        pageLimit={5}
                        dataLimit={10}
                    />
                </div>

            </div>
        </section >
    )
}

export default Posts
