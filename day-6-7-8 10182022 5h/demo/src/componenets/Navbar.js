import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <nav>
            <Link to={ '/home' }>Home</Link>
            <Link to={ '/about' }>About</Link>
            <Link to={ '/users' }>Users</Link>
            
            
        </nav>
    );
}