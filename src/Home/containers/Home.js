import React from "react";
import SecuritiesSearchForm from "../components/SecuritiesSearchForm";
import {connect} from "react-redux";
import {searchSecurities} from "../../store/actions/securities.actions";
import SearchResults from "../components/SearchResults";

function Home(props) {

    const updateSearchResults = q => {
        console.log(`The query is ${q}`);
        props.search(q);
    };

    return (
        <>
            <div className="jumbotron">

                <h1 className="display-4">Securities Search</h1>
                <p className="lead">
                    Simple React application that integrates with the Alphavantage API
                </p>

                <hr className="my-4" />

                <SecuritiesSearchForm updateSearchResults={updateSearchResults} />

            </div>

            <div className="row flex-column align-items-center mb-4">
                <div className="col col-md-8 col-lg-6 text-center justify-content-center">
                {
                    props.isLoading ?
                        <span>...Loading...</span> :
                        <SearchResults securitiesList={props.securitiesList} />
                }
                </div>
            </div>

        </>
    );
}

// Wire up this component to the store
function mapStateToProps(state) {
    return {
        securitiesList: state.searchReducer.searchResults,
        isLoading: state.searchReducer.isLoading
    }
}

function mapDispatchToProps(dispatch) {

    return {
      search: q => dispatch(searchSecurities(q))
    };

}

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;