import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Post from "../Shared/Post/Post"

const Profile = () => {

    const { profile } = useParams()
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${profile}`)
            .then(data => setUser(data.data))
            .catch(error => console.log(error.message))
    }, [profile])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => setPosts(data.data))
    }, [profile])

    // eslint-disable-next-line
    let filteredPosts = posts.filter(post => post.userId == profile)

    let { name, username, email, address, phone, website, company } = user

    return (
        <div>
            <div className="container">
                <section>
                    <p>Name: {name}</p>
                    <p>Username: @{username}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                    <p>Address: {address?.street}, {address?.city}</p>
                    <p>Company: {company?.name}</p>
                </section>
                <section>
                    {
                        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 g-4">
                            {
                                filteredPosts.map(post => <Post data={post} />)
                            }
                        </div>
                    }
                </section>
            </div>
        </div>
    )
}

export default Profile
