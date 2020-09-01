import React  from 'react';
import Navbar  from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login'
import Register from './Components/Register';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
function App() {
  
  return (
  <Router>
    <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
  </Router>
  );
}

export default App;
