export const SEARCH_SECURITIES = "SEARCH_SECURITIES";
export const UPDATE_SECURITIES_RESULT = "UPDATE_SECURITIES_RESULT";

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