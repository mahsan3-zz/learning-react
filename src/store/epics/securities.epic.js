import {ofType} from "redux-observable";
import {
    GET_FAVORITE_SYMBOL_PRICE,
    SEARCH_SECURITIES,
    updateSecuritiesResult,
    updateSymbolPrice
} from "../actions/securities.actions";
import {map, mergeMap, tap} from "rxjs/operators";
import { ajax } from 'rxjs/ajax';

export const searchSecuritiesEpic = action$ => action$.pipe(
    ofType(SEARCH_SECURITIES),
    mergeMap(action =>
        ajax.getJSON(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${action.payload.q}&apikey=4377OTF76Z8U0DNW`).pipe(
            map(response => {
                return updateSecuritiesResult(response.bestMatches);
            })
        )
    )
);

export const getFavoriteSymbolsPriceEpic = action$ => action$.pipe(
    ofType(GET_FAVORITE_SYMBOL_PRICE),
    tap((action) => {
        console.log(action)
    }),
    mergeMap((action) =>
        ajax.getJSON(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${action.payload}&apikey=4377OTF76Z8U0DNW`).pipe(
            map(response => {
                console.log(response);
                return updateSymbolPrice(response['Global Quote']);
            })
        )
    )
);