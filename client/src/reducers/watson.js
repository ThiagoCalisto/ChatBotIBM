import {INPUT_SUCCESS, 
        INPUT_FAIL, 
        SESSION_SUCCESS, 
        SESSION_FAIL, 
        MESSAGE_SUCESS, 
        MESSAGE_FAIL } from "../actions/types";

//Estado inicial
const initialState = {
    messages:[],
}

//Instrução de switch - estado de atualização
const teste = (state = initialState, action) => {

    const{type, payload} = action;
    let { messages } = state;

    switch(type) {
        case INPUT_SUCCESS:
        messages = [...messages, {message: payload, type: "user"}];
        return{
            ...state,
            messages,
        };
        case INPUT_FAIL:
            return{
                ...state,
            };
        case SESSION_SUCCESS:
            localStorage.setItem("session", payload["session_id"])
            return{
                ...state,
            };
        case SESSION_FAIL:
            return{
                ...state,
            };
        case MESSAGE_SUCESS:
            messages = [...messages, {message: payload,type:"bot"}];
            return{
                ...state,
                messages,
            };
        case MESSAGE_FAIL:
            return{
                ...state
            };
            default:
                return{
                ...state,
            };
    }
};

export default teste;