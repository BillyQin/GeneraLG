import React, { PureComponent } from 'react';
import './index.css';

class Logo extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      icon: null,
      mode: 1,
      background: '',
      text: ''
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
    const { icon, mode, background, text } = nextProps
    return {
      icon,
      mode,
      background,
      text
    }
  }

  /**
   * 绘画logo
   * @param {String} text 文字
   * @param {Number} mode [1,2,3,4]
   * @param {Number} upper 上限
   * @return {Number} 返回在下限到上限之间的一个随机整数
   */
  drawLogo = () => {
    const { icon, mode, background, text = '无印良品' } = this.state
    let c = this.refs.canvas;
    let ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);

    // 背景色
    ctx.beginPath();
    ctx.rect(0, 0, 1000, 1000);
    ctx.fillStyle = background;
    ctx.fill();
    ctx.closePath();

    if (mode === 4) {
      // 波浪线
      // 贝塞尔曲线
      // http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#333";
      ctx.stroke();
      // 起始点
      ctx.moveTo(0, 282);
      // 控制点1(x,y),控制点2(x,y),终点
      // cpx1,cpy1,cpx2,cpy2, endx, endy
      ctx.bezierCurveTo(163, 406, 246, 220, 400, 308);
      ctx.lineTo(400, 400);
      ctx.lineTo(0, 400);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.closePath();
    } else {
      // 底部大半圆
      ctx.beginPath()
      ctx.arc(200, 760, 460, 0, Math.PI, true);
      ctx.fillStyle = mode === 1 ? 'rgb(255,255,255)' : 'rgb(249,205,173)';
      switch (mode) {
        case 1: ctx.fillStyle = 'rgb(255,255,255)'; break;
        case 2: ctx.fillStyle = 'rgb(249,205,173)'; break;
        case 3: ctx.fillStyle = background; break;
        default: break;
      }
      ctx.strokeStyle = "rgb(255,255,255)";
      ctx.fill();
      ctx.closePath();

      // 底部小半圆
      ctx.beginPath()
      ctx.arc(200, 620, 320, 0, Math.PI, true);
      switch (mode) {
        case 1:
        case 2: ctx.fillStyle = 'rgb(255,255,255)'; break;
        case 3: ctx.fillStyle = background; break;
        default: break;
      }
      ctx.strokeStyle = "rgb(255,255,255)";
      ctx.fill();
      ctx.closePath();
    }

    // 底部字体
    ctx.beginPath()
    ctx.fillStyle = 'rgb(25,25,25)';
    ctx.font = "bold 30px arial";
    ctx.textAlign = "center";
    ctx.fillText(text, 200, 360);
    ctx.stroke();
    ctx.closePath();

    let img = new Image()
    img.src = require(`../../img/${icon}.svg`);
    img.onload = () => {
      ctx.drawImage(img, 100, 50, 200, 200);
    }
  }

  downLoad = () => {
    let c = this.refs.canvas;
    let a = document.createElement('a');
    var event = new MouseEvent('click');
    a.download = 'logo';
    a.href = c.toDataURL("image/png");
    a.dispatchEvent(event)
  }

  render() {
    return (
      <main>
        <canvas
          width={400}
          height={400}
          className="logo"
          ref='canvas'
        ></canvas>
        <div className="down-load">
          <button onClick={this.downLoad} style={{ marginTop: '20px' }}>下载png</button>
        </div>
      </main>
    )
  }
}

export default Logo;
