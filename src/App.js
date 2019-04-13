import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo';
import { generateColor, generateIcon } from './util/common';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      background: 0,
      icon: 0,
      mode: 1
    }
  }

  componentDidMount() {
    this.changeColor()
    this.changeIcon()
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  changeColor = () => {
    this.setState({
      background: generateColor()
    })
  }

  changeIcon = () => {
    this.setState({
      icon: generateIcon()
    })
  }

  changeMode = () => {
    this.setState({
      mode: this.state.mode===1?2:1
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
            <button onClick={this.changeMode}>
              模式
            </button>
            <button onClick={this.changeIcon}>
              图案
            </button>
            {/* <button onClick={this.changeFont}>
              字体
            </button> */}
          </div>
          
          <Logo 
            background={this.state.background}
            icon={this.state.icon}
            mode={this.state.mode}
          />
        </header>
      </div>
    );
  }
}

export default App;
