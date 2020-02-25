import {
    FAVORITE_SYMBOL, GET_FAVORITE_SYMBOL_PRICE,
    SEARCH_SECURITIES,
    UNFAVORITE_SYMBOL,
    UPDATE_SECURITIES_RESULT, UPDATE_SYMBOL_PRICE
} from "../actions/securities.actions";

const initialState = {
    symbolQuotes: [],
    favSymbols: [],
    isLoading: false,
    searchResults: []
};
function resolveDirectionToColor(change) {

    if(!change) return "black";

    if(change[0] === "-") {
        return "red";
    }else {
        return "green";
    }

}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_SECURITIES:
            return {
                ...state,
                searchResults: [],
                isLoading: true
            };
        case UPDATE_SECURITIES_RESULT:
            return {
                ...state,
                isLoading: false,
                searchResults: action.payload
            };
        case FAVORITE_SYMBOL:
            return {
                ...state,
                favSymbols: [...state.favSymbols, action.payload]
            };
        case UNFAVORITE_SYMBOL:
            return {
                ...state,
                favSymbols: state.favSymbols.filter(s => {
                    if(action.payload !== s) return s;
                })
            };
        case GET_FAVORITE_SYMBOL_PRICE:
            return {
              ...state,
                symbolQuotes: [
                    ...state.symbolQuotes, {
                        symbol: action.payload,
                        isLoading: true,
                        price: 0,
                        change: 0,
                        changeColor: ""
                    }
                ]
            };
        case UPDATE_SYMBOL_PRICE:
            return {
                ...state,
                symbolQuotes: state.symbolQuotes.map(quote => {
                    if(quote.symbol === action.payload['01. symbol']) {
                        return {
                          ...quote,
                          isLoading: false,
                          price: action.payload['05. price'],
                          change: action.payload['09. change'],
                          changeColor: resolveDirectionToColor(action.payload['09. change'])
                        };
                    }

                    return quote;
                })
            };
        default:
            return state;
    }
}