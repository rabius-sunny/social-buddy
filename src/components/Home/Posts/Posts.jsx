import axios from "axios"
import { useEffect, useState } from "react"
import Pagination from '../../Shared/Pagination/Pagination'

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
                    <Pagination
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
