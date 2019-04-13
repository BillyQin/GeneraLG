import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo';
import { generateColor } from './util/common';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.changeColor()
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  changeColor = () => {
    this.setState({
      count: generateColor()
    })
  }

  changeFont = () => {
    this.setState({
      count: generateColor()
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="button-group">
            <button onClick={this.changeColor}>
              背景色
            </button>
            <button onClick={this.changeFont}>
              字体
            </button>
          </div>
          
          <Logo count={this.state.count}/>
        </header>
      </div>
    );
  }
}

export default App;
