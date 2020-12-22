import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link text-white"  to="/">Home</Link>
                        <Link className="nav-link text-white"  to="/login">Login</Link>
                        <Link className="nav-link text-white"  to="/cadastrar">Cadastrar</Link>
                        <Link className="nav-link text-white"  to="/listar">Lista</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}