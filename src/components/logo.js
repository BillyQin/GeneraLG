import React, { PureComponent } from 'react';
import './logo.css';

class Logo extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    let c = this.refs.canvas;
    let ctx = c.getContext("2d");
    ctx.arc(200, 580, 300, 0, Math.PI, true);
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.strokeStyle = "rgb(255,255,255)";
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = 'rgb(25,25,25)';
    ctx.font = "bold 30px arial";
    ctx.textAlign="center";
    ctx.fillText("无印良品", 200, 350);
    ctx.stroke();
    ctx.closePath();

    let img = new Image()
    img.src = require('../img/1.svg');
    img.onload = () => {
      ctx.drawImage(img, 100, 50, 200,200);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      count: nextProps.count
    }
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <canvas 
          width={400} 
          height={400} 
          className="logo" 
          ref='canvas'
          style={{background: count}}
        ></canvas>
      </>
    )
  }
}

export default Logo;
