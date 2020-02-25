import {SEARCH_SECURITIES, UPDATE_SECURITIES_RESULT} from "../actions/securities.actions";

const initialState = {
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
        default:
            return state;
    }
}