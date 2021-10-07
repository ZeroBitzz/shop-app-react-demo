import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import allReducers from './reducers'; //it automatically calls the index file by default
import {Provider} from 'react-redux';

import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

//components
import About from './paths/About';
import Cart from './paths/Cart';
import Nav from './paths/Nav';
import Shop from './paths/Shop';

//mui imports
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const store = createStore(
  allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const Home = () => (
  <Container fixed>
    <Typography variant='h2' color='secondary'>
      My shopping app demo
    </Typography>
    <Typography variant='subtitle1' color='primary'>
      This app was made with react, redux, material ui, react router, and love. Appreciate this app or face the consequences.
    </Typography>
  </Container>
);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </div>
    </Router>
  );
}



  ReactDOM.render(
    <Provider store={store}>
      <App state={store.getState()}/>
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