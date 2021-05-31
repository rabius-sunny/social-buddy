import { Link } from "react-router-dom"

const Post = props => {

    const { title, body, userId, id } = props.data

    return (
        <div className="col">
            <div className="card h-100 shadow border-white">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <Link to={`/post/user/${userId}/id/${id}`} className="btn btn-secondary">Go details</Link>
                </div>
            </div>
        </div>
    )
}

export default Post
