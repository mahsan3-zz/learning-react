import React from "react";
import PropTypes from 'prop-types';
import "./SearchResults.scss";

export default function SearchResults(props) {

    return (
        <div className="list-group">
            {
                props.securitiesList.length > 0 ?
                props.securitiesList.map(item => {
                    return (
                        <div className="list-group-item list-group-item-action" key={item['1. symbol']}>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{item['1. symbol']}</h5>
                                <small>{item['2. name']}</small>
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <p className="mb-1">
                                    Type: {item['3. type']} | Currency: {item['8. currency']}
                                </p>
                                <img className="fav-icon selected" src={item.isFavorite ? "icons/heart-fill.svg" : "icons/heart.svg" } alt="" width="32" height="32" title="Add to favorites list"
                                     onClick={() => props.toggleFav(item['1. symbol'], item.isFavorite)}/>
                            </div>
                        </div>
                    );
                }) : <small>No results to show</small>
            }
        </div>
    );
}

SearchResults.propTypes = {
    securitiesList: PropTypes.array.isRequired,
    toggleFav: PropTypes.func.isRequired
};
