import { Link } from "react-router-dom"
import './navbar.css'
import logo from '../../../images/logo.svg'

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
                            <img className="logo" src={logo} alt="logo" />
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
