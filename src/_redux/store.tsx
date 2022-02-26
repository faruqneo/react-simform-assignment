import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
 
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const enhancers = [];
const middleware = [sagaMiddleware, logger, routerMiddleware(history)];

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

const composedEnhancers: any = compose(applyMiddleware(...middleware), ...enhancers);

// @ts-ignore
const persistedState = localStorage.getItem('reduxState')  ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(rootReducer(history), persistedState, composedEnhancers);

store.subscribe(()=>{
  // save a copy to localStorage
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

sagaMiddleware.run(rootSaga);

export default store;