import {
    FAVORITE_SYMBOL,
    SEARCH_SECURITIES,
    UNFAVORITE_SYMBOL,
    UPDATE_SECURITIES_RESULT
} from "../actions/securities.actions";

const initialState = {
    favSymbols: [],
    isLoading: false,
    searchResults: []
};

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
        default:
            return state;
    }
}