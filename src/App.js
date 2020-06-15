import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import {} from '@material-ui/core';
import Profile  from './components/Profile';
import Session from './components/Session';
import {Switch,BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (      
    <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Session}/>
          <Route exact path="/session" component={Session}/>
          <Route exact path="/profile"  component={Profile} />
        </Switch>     
    </BrowserRouter>
    );

}

export default App;
