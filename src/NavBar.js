import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="nav-brand">Todo App</div>
            <div className="nav-navigation">
                <Link to="/" className="nav-links">Todos</Link>
                <Link to="/add-todo" className="nav-links">Add Todo</Link>
            </div>
        </div>
     );
}
 
export default NavBar;