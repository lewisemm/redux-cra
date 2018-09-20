import { createStore, applyMiddleware } from "react";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}