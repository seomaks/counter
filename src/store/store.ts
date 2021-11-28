import CounterReducer from "./CounterReducer";
import {combineReducers, createStore} from "redux";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducer = combineReducers({
  counter: CounterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
 saveState({
   counter: store.getState().counter
 })
})

export type AppStateType = ReturnType<typeof rootReducer>

