import {combineReducers} from "redux";
import { combineEpics } from 'redux-observable';
import appReducer from "./app.reducer";
import searchReducer from "./securities.reducer";

export const rootEpic = combineEpics(

);

export const rootReducer = combineReducers({
    appReducer,
    searchReducer
});