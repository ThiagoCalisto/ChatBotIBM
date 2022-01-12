//Importar Depêndencias
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers";

//Connectar o aplicativo ao Redux Devtools
import { composeWithDevTools } from "redux-devtools-extension";

//Configurar estado inicial
const initialState = {};

//Importar middleware
const middleware = [thunk];

//Configurar store
const store = createStore(combineReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

//Exportar store
export default store;