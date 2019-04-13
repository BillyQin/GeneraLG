import React, { PureComponent } from 'react';
import './index.css';

class Logo extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      icon: 0,
      mode: 1
    }
    this.mode = {}
  }

  componentDidMount() {
    this.drawLogo()
  }

  componentDidUpdate() {
    this.drawLogo()
  }

  static getDerivedStateFromProps(nextProps) {
    const { icon,mode } = nextProps
    return {
      icon,
      mode
    }
  }

  /**
   * 绘画logo
   * @param {String} text 文字
   * @param {Number} mode [1,2]
   * @param {Number} upper 上限
   * @return {Number} 返回在下限到上限之间的一个随机整数
   */
  drawLogo = (text='无印良品') => {
    const { icon, mode } = this.state
    let c = this.refs.canvas;
    let ctx = c.getContext("2d");
    ctx.clearRect(0,0,1000,1000);
    // 底部半圆2
    ctx.beginPath()
    ctx.arc(200, 760, 460, 0, Math.PI, true);
    ctx.fillStyle = mode===1?'rgb(255,255,255)':'rgb(249,205,173)';
    ctx.strokeStyle = "rgb(255,255,255)";
    ctx.fill();
    ctx.closePath();

    // 底部半圆1
    ctx.beginPath()
    ctx.arc(200, 620, 320, 0, Math.PI, true);
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.strokeStyle = "rgb(255,255,255)";
    ctx.fill();
    ctx.closePath();

    // 底部字体
    ctx.beginPath()
    ctx.fillStyle = 'rgb(25,25,25)';
    ctx.font = "bold 30px arial";
    ctx.textAlign="center";
    ctx.fillText(text, 200, 360);
    ctx.stroke();
    ctx.closePath();

    let img = new Image()
    img.src = require(`../../img/${icon}.svg`);
    img.onload = () => {
      ctx.drawImage(img, 100, 50, 200,200);
    }
  }

  downLoad = () => {
    // let image = new Image();
    let c = this.refs.canvas;
    // image.src = c.toDataURL("image/png");
    var a = document.createElement('a');
    var event = new MouseEvent('click');
    a.href = c.toDataURL("image/png");
    a.dispatchEvent(event) 
    return null
  }

  render() {
    const { background } = this.props;
    return (
      <>
        <canvas 
          width={400} 
          height={400} 
          className="logo" 
          ref='canvas'
          style={{background}}
        ></canvas>
        <button onClick={this.downLoad} style={{marginTop: '20px'}}>下载png</button>
      </>
    )
  }
}

export default Logo;
