import React from "react";
import Link from "react-router-dom";

const NavBar = ({user}) => {
    return(
        <div>
            {user && <h4>Welcome {user.username}</h4>}
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;