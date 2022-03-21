import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux"; /* change */
import { Provider } from "react-redux"; /* change*/
import counterReducer from "./features/counter/counterSlice.js";
import App from "./App";
import "./index.css";

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); /* change */

// code change - added Provider to wrap around App
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById("root")
);
