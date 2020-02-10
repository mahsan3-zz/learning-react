import {ADD_COFFEE} from "./app.actions";

const initialState = {
    coffeeItems: []
};

export default function appReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_COFFEE:
            return {
                ...state,
                coffeeItems: [...state.coffeeItems, action.payload.coffeeItem]
            };
        default:
            return state;
    }
}