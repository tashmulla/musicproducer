import React from 'react';
import './App.css';
import Glossary from './components/Glossary';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Editor from './components/Editor';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>

    <Router>
      <NavBar/>
        <Switch>
          <Route path="/" exact component={Homepage}/> 
          <Route path="/glossary" component={Glossary}/>
          <Route path="/editor" component={Editor}/>
        </Switch>
    </Router>

    </div>
  );
}

export default App;
