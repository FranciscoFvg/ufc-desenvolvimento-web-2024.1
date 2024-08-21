import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { Outlet, Link } from 'react-router-dom'

const Home = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav"></div>
                <ul className="navbar-nav mb-2 mb-lg-0 mx-5">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {/* INICIO DO MENU DROPDOWN */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown" role="button"
                            href="#" aria-expanded="false">Professor</a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/professor/criar">Criar professor</Link> </li>
                            <li><Link className="dropdown-item" to="/professor/listar">Listar professor</Link></li>
                        </ul>
                    </li>
                    {/* FIM DO MENU DROPDOWN */}
                </ul>
                
            </div>
        </nav>
        {/* OUTLET DO REACT ROUTER DOM */}
        <div className="container">
            <div className="row">
                <div className="col-12 my-4">
                    <Outlet />
                </div>
            </div>
        </div>
        {/* OUTLET DO REACT ROUTER DOM */}
    </>
    )
}

export default Home