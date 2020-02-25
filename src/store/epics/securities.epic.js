import {ofType} from "redux-observable";
import {SEARCH_SECURITIES, updateSecuritiesResult} from "../actions/securities.actions";
import {map, mergeMap} from "rxjs/operators";
import { ajax } from 'rxjs/ajax';

export const searchSecuritiesEpic = action$ => action$.pipe(
    ofType(SEARCH_SECURITIES),
    mergeMap(action =>
        ajax.getJSON(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${action.payload.q}&apikey=L5OW8A2EE5X8CJG1`).pipe(
            map(response => {
                return updateSecuritiesResult(response.bestMatches);
            })
        )
    )
);