import { Link } from "react-router-dom"
import './navbar.css'

const Navbar = () => {

    return (
        <>
            <header>
                <div className="collapse bg-secondary" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-light">Welcome to Social Buddy <small>_by Rabius Sunny</small> <br />
                                This is dummy social blogging application made with ReactJs and Bootstrap5. <br />
                                You can read, write, delete and update post here as another social platform. <br />
                                So, what are you waiting for? Create a post now!
                                </p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    <li><a href="https://github.com/rabius-sunny" target="_blank" rel="noreferrer" className="text-white">Follow on Github</a></li>
                                    <li><a href="https://linkedin.com/in/rabius-sunny" target="_blank" rel="noreferrer" className="text-white">Connect in LinkedIn</a></li>
                                    <li><a href="rabiussunny10@gmail.com" target="_blank" rel="noreferrer" className="text-white">Email me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-secondary shadow-sm">
                    <div className="container">
                        <Link to="/" className="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="royalblue" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                            <strong>Social Buddy</strong>
                        </Link>
                        <div className="ms-auto">
                            <button className="mx-2 profile__btn"><Link to="/profile/user/2" >My Profile</Link></button>
                            <span className="text-light">|</span>
                            <button className="mx-2 profile__btn"><Link to="/allProfiles" >My Friends</Link></button>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
