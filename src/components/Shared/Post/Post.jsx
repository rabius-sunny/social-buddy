import moreIcon from '../../../images/moreIcon.svg'
import { Link } from "react-router-dom"
import './post.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Post = props => {

    const { title, body, userId, id } = props.data
    const [currentId, setCurrentId] = useState(0)
    const [currentPost, setCurrentPost] = useState({})
    const [newPost, setNewPost] = useState({
        updatedTitle: '',
        updatedBody: ''
    })
    console.log(currentPost)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${currentId}`)
            .then(res => setCurrentPost(res.data))
            .catch(error => console.log(error.message))
    }, [currentId])

    const handleChange = e => {
        let editedPost = { ...newPost }
        editedPost[e.target.name] = e.target.value
        setNewPost(editedPost)
    }
    const handleDelete = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => console.log(res.status))
            .catch(error => console.log(error.message))
    }
    const handleSubmit = id => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title: newPost.updatedTitle,
            body: newPost.updatedBody
        })
            .then(res => console.log(res.status))
            .catch(error => console.log(error.message))
    }

    return (<>
        <div className="col">
            <div className="card h-100 shadow border-white">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{title}</h5>
                        <div className="dropstart">
                            <button type="button" id="dropBtn" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={moreIcon} alt="more" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {userId === 2 && <li><button onClick={() => setCurrentId(id)} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" className="dropdown-item">Edit</button></li>}
                                {userId === 2 && <li><button onClick={() => handleDelete(id)} className="dropdown-item" href="/">Delete</button></li>}
                                <li><button className="dropdown-item">Share</button></li>
                                <li><button className="dropdown-item">Save</button></li>
                            </ul>
                        </div>
                    </div>
                    <p className="card-text">{body}</p>
                    <Link to={`/post/user/${userId}/id/${id}`} className="btn btn-secondary">Go details</Link>
                </div>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update Post</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="title" className="col-form-label">Title :</label>
                                <input onChange={handleChange} name="updatedTitle" className="form-control" defaultValue={currentPost.title} />
                            </div>
                            <div className="mb-3">
                                <label for="body" className="col-form-label">Body :</label>
                                <textarea onChange={handleChange} name="updatedBody" className="form-control" defaultValue={currentPost.body}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button onClick={() => handleSubmit(currentId)} type="button" className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Post
