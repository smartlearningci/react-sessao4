import { Link } from "react-router-dom";
import { nivelContexto } from "../../contextos/contextNivel";
import { useContext } from 'react';
function BarraLateral() {

    const nivel = useContext(nivelContexto);

    return (
        <header className="header text-center">
            <h1 className="blog-name pt-lg-4 mb-0"><Link className="no-text-decoration" to={"/inicio"}>Anthony's Blog</Link></h1>
      
            <h1>contexto: {nivel}</h1>

            <nav className="navbar navbar-expand-lg navbar-dark" >

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navigation" className="collapse navbar-collapse flex-column" >
                    <div className="profile-section pt-3 pt-lg-0">
                        <img className="profile-image mb-3 rounded-circle mx-auto" src="/assets/images/profile.png" alt="image" />

                        <div className="bio mb-3">Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br /><Link to={"/sobre"}>Find out more about me</Link></div>
                        <ul className="social-list list-inline py-3 mx-auto">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-codepen fa-fw"></i></a></li>
                        </ul>
                        <hr />
                    </div>

                    <ul className="navbar-nav flex-column text-start">
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/inicio"}><i className="fas fa-home fa-fw me-2"></i>Blog Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/blog"}><i className="fas fa-bookmark fa-fw me-2"></i>Blog Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sobre"}><i className="fas fa-user fa-fw me-2"></i>About Me</Link>
                        </li>
                    </ul>

                    <div className="my-2 my-md-3">
                        <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">Get in Touch</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default BarraLateral;
