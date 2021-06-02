import axios from 'axios'
import { useState } from 'react'
import './intro.css'

const Intro = () => {

    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const handleChange = e => {
        let newPost = { ...post }
        newPost[e.target.name] = e.target.value
        setPost(newPost)
    }
    const handlePost = () => {
        let { title, body } = post
        if (title !== '' && body !== '') {
            axios.post('https://jsonplaceholder.typicode.com/users/endPoint', {
                title,
                body
            })
                .then(res => console.log(res.status))
                .catch(err => console.log(err.message))
            alert('Posted Successfully! Go to Home.')
            window.location.reload()
        } else alert('Please write something...')
    }

    return (
        <section className="bg-light">
            <div className="container py-md-5 py-3 text-center rounded">
                <h1>Hello There!</h1>
                <p>Wanna write a post?</p>
                <button type="button" className="inputBtn w-50" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">express whats on your mind... |</button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content text-start">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Post</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={e => e.preventDefault()}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="col-form-label">Post Title :</label>
                                        <input onChange={handleChange} name="title" type="text" className="form-control" id="title" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="body" className="col-form-label">Description :</label>
                                        <textarea onChange={handleChange} name="body" className="form-control" id="body"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button onClick={handlePost} type="submit" className="btn btn-outline-primary">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
