export function generateColor () {
  // let num = Math.random()*255;
  let res = '#';
  for(let i=0;i<3;i++) {
    res += random(128,255).toString(16)
  }
  return res
}

/**
 * 产生随机整数，包含下限值和上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower+1)) + lower;
}