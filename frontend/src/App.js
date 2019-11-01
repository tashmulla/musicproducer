import React, {Component} from 'react';
import './App.css';
import Glossary from './components/Glossary';
import NavBar from './components/NavBar';
import Editor from './components/Editor';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {

  constructor() {
    super()
    this.componentDidMount()
  }

  componentDidMount = () => {
    document.body.style.backgroundColor = "#2a2c30"
  }

  render() {
    return (
      <div>
  
      <Router>
        <NavBar/>
          <Switch>
            <Route path="/" exact component={Editor}/> 
            <Route path="/glossary" component={Glossary}/>
          </Switch>
      </Router>
  
      </div>
    );
  }
}

export default App;
