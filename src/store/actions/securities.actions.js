export const SEARCH_SECURITIES = "SEARCH_SECURITIES";

export const searchSecurities = q => ({
    type: SEARCH_SECURITIES,
    payload: {
        q
    }
});