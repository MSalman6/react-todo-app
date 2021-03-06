import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Todo App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add" style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px' 
                }}>New Todo</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;