import React from "react";
import {Link} from "react-router-dom";

const NavBar = ({user}) => {
    return(
        <div>
            {user && <h4>Welcome {user.username}</h4>}
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/timeline">Timeline</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;