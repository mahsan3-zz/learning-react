import React, {useEffect} from "react";
import {
    getFavoriteSymbolPrice,
} from "../../store/actions/securities.actions";
import {connect} from "react-redux";
import QuoteCard from "../components/QuoteCard";

function FavoriteSecurities(props) {

    useEffect(() => {
        props.favSymbols.forEach(symbol => props.getFavPrice(symbol));
    }, []);

    return (
        <div className="row">

            <div className="col-12">



            </div>

            <div className="col-12">

                <ul className="list-group">
                    {props.symbolQuotes.map((quote, i) => {
                        return (
                            <QuoteCard key={i}
                                symbol={quote.symbol}
                                price={quote.price}
                                change={quote.change}
                                changeColor={quote.changeColor}
                            />
                        );
                    })}
                </ul>

            </div>

        </div>
    );
}

// Wire up this component to the store
function mapStateToProps(state) {
    return {
        favSymbols: state.searchReducer.favSymbols,
        symbolQuotes: state.searchReducer.symbolQuotes,
        isLoading: state.searchReducer.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFavPrice: s => dispatch(getFavoriteSymbolPrice(s))
    };
}

FavoriteSecurities = connect(mapStateToProps, mapDispatchToProps)(FavoriteSecurities);

export default FavoriteSecurities;