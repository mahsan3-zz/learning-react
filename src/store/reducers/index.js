import {combineReducers} from "redux";
import { combineEpics } from 'redux-observable';
import appReducer from "./app.reducer";
import searchReducer from "./securities.reducer";
import {getFavoriteSymbolsPriceEpic, searchSecuritiesEpic} from "../epics/securities.epic";

export const rootEpic = combineEpics(
    searchSecuritiesEpic,
    getFavoriteSymbolsPriceEpic
);

export const rootReducer = combineReducers({
    appReducer,
    searchReducer
});