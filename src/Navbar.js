import { Link } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Lady Whistledown's Blog</h1>
            <div className="Links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;