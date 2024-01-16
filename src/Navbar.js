import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>El blog de DWEC</h1>
            <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/create">Nuevo Blog</Link>
                <Link to="/detalle">Detalles</Link>
            </div>
        </nav>    
    );
}
 
// export default Navbar