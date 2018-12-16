import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logoImg from './assets/img/1.png'
import NavHeader from './components/common/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
			{/*<h2>卡卡卡卡</h2>*/}
			{/*<img src={logoImg} alt="ss"/>*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        {/*</header>*/}
		  <NavHeader/>
      </div>
    );
  }
}

export default App;
