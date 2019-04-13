import React, { PureComponent } from 'react';

class Test extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    let c = this.refs.canvas;
    let ctx = c.getContext("2d");
    ctx.arc(200, 400, 200, 0, Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = 'rgb(0,255,255)';
    ctx.strokeStyle="rgb(0,255,255)";
    ctx.fill();
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    // ctx.fillStyle = 'rgb(0,255,255)';
    ctx.stroke();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.count)
    return {
      count: nextProps.count
    }
  }

  generateImg = () => {
    // let img = new Img()
    // img.
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <span style={{ color: count }}>随机颜色</span>
        <canvas width={400} height={400} style={{background: "#fff", borderRadius: '20px'}} ref='canvas'></canvas>
      </>
    )
  }
}

export default Test;
