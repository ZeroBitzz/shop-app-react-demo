//REACT ROUTER
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

//COMPONENT IMPORTS
import About from './paths/About';
import Cart from './paths/Cart';
import Nav from './paths/Nav';
import Shop from './paths/Shop';

//MATERIAL UI IMPORTS
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

//HOME PAGE COMPONENT
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

//APP COMPONENT
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

export default App;