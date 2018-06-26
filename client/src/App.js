import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import SampleComponentContainer from './components/SampleComponentContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React-Redux-Express</h1>
        </header>
        <main>
          <Route exact path="/" component={SampleComponentContainer} />
        </main>
      </div>
    );
  }
}

export default App;
