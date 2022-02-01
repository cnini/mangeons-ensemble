import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>Mangeons Ensemble</h1>
            <div className="Navbar-links">
                <Link to="/">Home</Link>
                <Link to="/account">Account</Link>
            </div>
        </nav>
    );
}
    
export default Navbar;
