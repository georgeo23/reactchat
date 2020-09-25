import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Chat from './Components/Chat'
function App() {
  return (
    <Switch>
        <Route exact path='/' component={Chat} />
    </Switch>
    
  );
}

export default App;
