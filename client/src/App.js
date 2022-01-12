//Importar dependencias
import React, {useEffect} from 'react';
import './App.css';

//Importar componentes do redux
import { Provider } from "react-redux";
import store from './store';

//Importar componentes do chat
import Chat from './components/Chat';

//Importar acoes
import { createSession } from './actions/watson';

//Importar axios
import axios from 'axios';

if(localStorage.session !== 0){
  delete axios.defaults.headers.common["session_id"];

  axios.defaults.headers.common["session_id"] = localStorage.session;
}else{
  delete axios.defaults.headers.common["session_id"];
}

//Conectar aplicacao ao redux
const App = () => {
  useEffect(()=>{
    if(localStorage.session !== null){
      store.dispatch(createSession())
    }

  })
  return (
    <Provider store={store}>
      <div className="container">
        <Chat />
      </div>
      </Provider>
  ); 
}

//Exportar App
export default App;
