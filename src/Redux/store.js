// create store here
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)

);



export const store = createStore(reducer, enhancer);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
