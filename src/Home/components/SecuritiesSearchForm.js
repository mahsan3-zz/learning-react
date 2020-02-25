import React, {useEffect, useRef, useState} from "react";
import {fromEvent} from "rxjs";
import PropTypes from 'prop-types'

export default function SecuritiesSearchForm (props) {

    const [searchQuery, setSearchQuery] = useState("");
    const inputEl = useRef(null);

    useEffect(() => {
        fromEvent(inputEl.current, 'keyup').subscribe((e) => {
            console.log(e.key);
            console.log(e.target.value);
        });

    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(searchQuery);
        props.updateSearchResults(searchQuery);
    };

    return (
        <form className="" onSubmit={handleSubmit} autoComplete="off">

            <div className="form-group">
                <label htmlFor="searchInput">Search name</label>

                <input type="text" className="form-control" id="searchInput"
                       onChange={e => setSearchQuery(e.target.value)} ref={inputEl} />

                <small id="searchHelp" className="form-text text-muted">
                    Example: apple, aapl, boeing...
                </small>
            </div>

            <button type="submit" className="btn btn-primary">
                Search
            </button>

        </form>
    );

}

SecuritiesSearchForm.propType = {
    updateSearchResults: PropTypes.func.isRequired
};