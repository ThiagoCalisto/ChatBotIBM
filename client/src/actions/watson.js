//Importar types
import { INPUT_SUCCESS,
         INPUT_FAIL,
         SESSION_SUCCESS,
         SESSION_FAIL, 
         MESSAGE_SUCESS,
         MESSAGE_FAIL 
        } from "./types";

//Importar axios
import axios from "axios";

//Funcao que armazena a mensagem dos usuarios
export const userMessage = (message) => async (dispatch) => {
    try {
        dispatch({ type: INPUT_SUCCESS, payload: message});
    }catch (err){
        dispatch({type: INPUT_FAIL});
    }
};

//Criar sessao caso nao esteja criada
export const createSession = () => async (dispatch) =>{
    try{
        const res = await axios.get("http://localhost:5000/api/watson/session");
        console.log(res.data)
        dispatch({ type : SESSION_SUCCESS, payload: res.data });
    }catch(err){
        dispatch({type: SESSION_FAIL});

    }

};

//Mandar mensagem para o BOT (IBM-WATSON)
export const sendMessage = message => async (dispatch) =>{
    try{
        const body = {input:message};
        const res = await axios.post("http://localhost:5000/api/watson/message", body);
        console.log(res);
        dispatch({type:MESSAGE_SUCESS, payload:(await res).data.output.generic[0].text});
    }catch{
    dispatch({type:MESSAGE_FAIL});
    }
}
