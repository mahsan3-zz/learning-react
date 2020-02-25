import React from "react";
import {Link} from "react-router-dom";

function Navigation() {

    return (
        <div className="row">
            <div className="col p-1">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">Navbar</a>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to="/coffee">
                                    <span className="nav-link">My Favorites</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/*<ul className="nav justify-content-end">*/}
                {/*    <li className="nav-item">*/}
                {/*        <Link to="/coffee">*/}
                {/*            <span className="nav-link">Coffees</span>*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <Link to="/new-coffee-item">*/}
                {/*            <span className="nav-link">New Coffee</span>*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </div>
    );

}

export default Navigation;