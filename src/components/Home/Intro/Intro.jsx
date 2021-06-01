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
        <section className="container">
            <div className="bg-light py-md-5 py-3 text-center rounded intro">
                <h1>Hello There!</h1>
                <p>Wanna write a post?</p>
                <button type="button" class="inputBtn w-50" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">express whats on your mind... |</button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content text-start">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">New Post</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={e => e.preventDefault()}>
                                    <div class="mb-3">
                                        <label for="title" class="col-form-label">Post Title :</label>
                                        <input onChange={handleChange} name="title" type="text" class="form-control" id="title" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="body" class="col-form-label">Description :</label>
                                        <textarea onChange={handleChange} name="body" class="form-control" id="body"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button onClick={handlePost} type="submit" class="btn btn-outline-primary">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
