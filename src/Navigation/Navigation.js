import React from "react";
import {Link} from "react-router-dom";

function Navigation() {

    return (
        <div className="row">
            <div className="col">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/coffee">
                            <span className="nav-link">Coffees</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/new-coffee-item">
                            <span className="nav-link">New Coffee</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Navigation;