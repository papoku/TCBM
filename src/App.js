import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Map from './components/Map';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="">
          <Header content='Realtime Turku city bus location mapping' />
        </header>
        <div className="bodyWrapper">
          <Map callback={this.handlechange}/>
        </div>
        <footer>
          <Header content='Copyright' />
        </footer>
      </div>
    );
  }
}

export default App;
