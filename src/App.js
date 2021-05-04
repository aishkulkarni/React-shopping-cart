import './App.css';
import NavBar from './components/navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from './components/Cart/Cart';

function App() {
  return (
    <Router>
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={CartItem} />
      </Switch>
    </div>
  </Router>
);
}


export default App;
