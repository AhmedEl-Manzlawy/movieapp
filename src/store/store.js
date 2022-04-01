import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {MovieReducer} from './reducer'
export const store = createStore(MovieReducer, composeWithDevTools());