import React from 'react';
import './App.css';
import Glossary from './components/Glossary';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/glossary">
        <Glossary />
      </Route>
    </Router>
    
  );
}

export default App;
