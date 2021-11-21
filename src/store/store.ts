import CounterReducer from "./CounterReducer";
import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({
  counter: CounterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
