import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo';
import { generateColor, generateIcon } from './util/common';

const MODE = [1,2,3,4]

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      background: 0,
      icon: 0,
      mode: 1,
      text: ''
    }
    this.titleText = ''
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

  changeMode = (mode) => {
    this.setState({
      mode
    })
  }

  changeText = () => {
    this.setState({
      text: this.titleText
    })
  }

  changeTextHandle = ({target}) => {
    this.titleText = target.value
  }

  render() {
    return (
      <div className="App">
        <div className="button-group">
          <div className="form-item">
            <h3>文本</h3>
            <div className="item">
              <input onChange={this.changeTextHandle}/>
              <button onClick={this.changeText}>确定</button>
            </div>
          </div>
          <div className="form-item">
            <h3>背景色</h3>
            <div className="item">
              <input />
              <button onClick={this.changeColor}>确定</button>
            </div>
            <div className="item">
              <span>{this.state.background}</span>
              <button onClick={this.changeColor}>随机生成</button>
            </div>
          </div>
          <div className="form-item">
            <h3>图案</h3>
            <div className="item">
              <span>图案{this.state.icon}</span>
              <button onClick={this.changeIcon}>随机生成</button>
            </div>
            <div className="item">
              <button onClick={this.changeColor}>图案列表</button>
            </div>
          </div>
          <div className="form-item">
            <h3>模式</h3>
            <div className="button-group">
              {MODE.map((item,key) => (
                <button key={key} onClick={()=>this.changeMode(item)}>模式{item}</button>
              ))}
            </div>
          </div>
        </div>
        <main>
          <Logo
            background={this.state.background}
            icon={this.state.icon}
            mode={this.state.mode}
            text={this.state.text}
          />
        </main>
      </div>
    );
  }
}

export default App;
