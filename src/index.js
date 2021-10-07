//REACT IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

//STYLE IMPORTS
import './index.css';

//APP IMPORT
import App from './App';

//REDUX IMPORTS
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//REDUCER IMPORT
import allReducers from './reducers'; //it automatically calls the index file by default

//STORE DECLARATION
const store = createStore(
  allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//RENDER METHOD
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

  /*
         -''--.
       _`>   `\.-'<
    _.'     _     '._
  .'   _.='   '=._   '.
  >_   / /_\ /_\ \   _<
    / (  \o/\\o/  ) \
    >._\ .-,_)-. /_.<
        /__/ \__\ 
          '---'     E=mc^2
*/