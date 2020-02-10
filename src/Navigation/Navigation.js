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
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Navigation;