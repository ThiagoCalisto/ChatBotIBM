import React, {useState, useEffect, useRef} from "react";
import { connect } from "react-redux";

//Importar acoes
import { userMessage, sendMessage } from "../actions/watson";

const Chat = ({chat, userMessage , sendMessage}) => {

    //Armazenar Mensagens de usuarios
    const [message, setMessage] = useState("");
    const endOfMessage = useRef(null);

    const scrollToBottom = () =>{
        endOfMessage.current.scrollIntoView({behavior:"smooth"});
    }
    useEffect(scrollToBottom, [chat]);

    //Função que lida com o envio do usuário
    const handleClick = async (e) => {
        const code = e.keyCode || e.which;

        if (code===13){
            console.log(message);
            userMessage(message);
            sendMessage(message);
            setMessage("");
        }

    };
     
    return (
        <div className="chat">
            <h1>Botzin meu chatbot</h1>
        <div class="historyContainer">
            {chat.length === 0 ? "" : chat.map((msg)=><div className={msg.type}>{msg.message}</div>)}
            <div ref={endOfMessage}></div>
            </div>

            <input id="chatbox"
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleClick}
            value={message}
            >

            </input>
        </div>
    )
}
const mapStateToProps = (state) => ({
    chat: state.watson.messages
})

export default connect(mapStateToProps, { userMessage, sendMessage }) (Chat);