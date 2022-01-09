import logo from './logo.svg';
import './App.css';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Component/Header/Header';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="">
        
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
