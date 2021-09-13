import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {connectRouter, routerMiddleware} from "connected-react-router";
import languageReducer from './reducer';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    router: connectRouter(history),
    language: languageReducer
});

const middleware = [
    thunkMiddleware,
    routerMiddleware(history),
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, {}, enhancers);


export default store;