import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import logo from '../../images/logo.svg'
import './profile.css'
import PostPagination from "../Shared/Pagination/PostPagination"
import Spinner from "../Shared/Spinner"

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
                    {
                        !posts.length && <Spinner />
                    }
                    {
                        posts.length &&
                        <div>
                            <section>
                                <div className="text-center primaryInfo">
                                    <div><img src={logo} alt="profilePic" /></div>
                                    <h2 className="mb-0">{name}</h2> <small>@{username}</small>
                                    <p>{email}</p>
                                </div>
                                <div className="d-flex justify-content-evenly">
                                    <div>
                                        <p>Phone: {phone}</p>
                                        <p>Website: {website}</p>
                                    </div>
                                    <div>
                                        <p>Address: {address?.street}, {address?.city}</p>
                                        <p>Company: {company?.name}</p>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h2>Latest Post</h2>
                                <hr className="mb-md-5" />
                                <PostPagination
                                    data={filteredPosts}
                                    pageLimit={2}
                                    dataLimit={5}
                                />
                                {/* eslint-disable-next-line */}
                                <p className="top"><a href="#">^</a></p>
                            </section>
                        </div>
                    }
                </section>
            </div>
        </div>
    )
}

export default Profile
