export const SEARCH_SECURITIES = "SEARCH_SECURITIES";
export const UPDATE_SECURITIES_RESULT = "UPDATE_SECURITIES_RESULT";
export const FAVORITE_SYMBOL = "FAVORITE_SYMBOL";
export const UNFAVORITE_SYMBOL = "UNFAVORITE_SYMBOL";
export const GET_FAVORITE_SYMBOL_PRICE ="GET_FAVORITE_SYMBOL_PRICE";
export const UPDATE_SYMBOL_PRICE = "UPDATE_SYMBOL_PRICE";


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

export const getFavoriteSymbolPrice = sym => ({
    type: GET_FAVORITE_SYMBOL_PRICE,
    payload: sym
});

export const updateSymbolPrice = data => ({
    type: UPDATE_SYMBOL_PRICE,
    payload: data
});