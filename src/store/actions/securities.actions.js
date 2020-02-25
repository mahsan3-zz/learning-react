export const SEARCH_SECURITIES = "SEARCH_SECURITIES";
export const UPDATE_SECURITIES_RESULT = "UPDATE_SECURITIES_RESULT";
export const FAVORITE_SYMBOL = "FAVORITE_SYMBOL";
export const UNFAVORITE_SYMBOL = "UNFAVORITE_SYMBOL";


export const searchSecurities = q => ({
    type: SEARCH_SECURITIES,
    payload: {
        q
    }
});

export const updateSecuritiesResult = data => ({
    type: UPDATE_SECURITIES_RESULT,
    payload: data
});

export const favoriteSymbol = sym => ({
    type: FAVORITE_SYMBOL,
    payload: sym
});

export const unfavoriteSymbol = sym => ({
    type: UNFAVORITE_SYMBOL,
    payload: sym
});