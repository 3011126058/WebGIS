//获取上下文对象
const context = document.querySelector('#logo').getContext('2d')
// //创建圆
context.arc(40, 30, 29, Math.PI / 180 * 0, Math.PI / 180 * 360);
context.strokeStyle = 'black'
context.stroke()
context.fillStyle = '#2292DD'
context.fill()
//绘制纵轴
context.lineWidth = 0.5
context.moveTo(40, 60)
context.lineTo(40, 0)
context.stroke()
//绘制横轴
context.lineWidth = 0.5
context.moveTo(70, 30)
context.lineTo(10, 30)
context.stroke()
//绘制曲线
context.beginPath();
context.lineWidth = 0.5
context.moveTo(40, 0);
context.quadraticCurveTo(13, 30, 40, 60);
context.stroke()

context.beginPath();
context.lineWidth = 0.5
context.moveTo(40, 0);
context.bezierCurveTo(10, 15, 10, 45, 40, 60);
context.stroke()

context.beginPath();
context.lineWidth = 0.5
context.moveTo(40, 0);
context.quadraticCurveTo(67, 30, 40, 60);
context.stroke()

context.beginPath();
context.lineWidth = 0.5
context.moveTo(40, 0);
context.bezierCurveTo(70, 15, 70, 45, 40, 60);
context.stroke()
context.save();

//先设置裁剪范围再绘制横线
context.beginPath();
context.arc(40, 30, 29, Math.PI / 180 * 0, Math.PI / 180 * 360);
context.clip();

context.beginPath();
context.lineWidth = 0.5
context.moveTo(80, 15)
context.lineTo(0, 15)
context.stroke()

context.beginPath();
context.lineWidth = 0.5
context.moveTo(80, 45)
context.lineTo(0, 45)
context.stroke()
context.restore();

//绘制图标
context.beginPath();
context.arc(52, 10, 10, Math.PI / 180 * 30, Math.PI / 180 * 150,true);
context.lineTo(52,28)
context.strokeStyle = 'black'
context.stroke()
context.fillStyle = 'red'
context.fill()

context.beginPath();
context.arc(52, 10, 3, Math.PI / 180 * 0, Math.PI / 180 * 360);
context.strokeStyle = 'black'
context.stroke()
context.fillStyle = 'white'
context.fill()

context.beginPath();
context.ellipse(16,40,12,8,0,180/(Math.PI)*0,180/(Math.PI)*360);
context.lineTo(32,50);
context.lineTo(17,45)
context.stroke();
context.fillStyle='white'
context.fill()

context.beginPath();
context.arc(16, 40, 2, Math.PI / 180 * 0, Math.PI / 180 * 360);
context.strokeStyle = 'black'
context.stroke()
context.fillStyle = '#2292DD'
context.fill()

context.beginPath();
context.arc(10, 40, 2, Math.PI / 180 * 0, Math.PI / 180 * 360);
context.strokeStyle = 'black'
context.stroke()
context.fillStyle = '#2292DD'
context.fill()

context.beginPath();
context.arc(22, 40, 2, Math.PI / 180 * 0, Math.PI / 180 * 360);
context.strokeStyle = 'black'
context.stroke()
context.fillStyle = '#2292DD'
context.fill()


//绘制图片
// var img = new Image();
// img.onload = function() {
//   context.drawImage(img, 0, 0,img.width/18,img.height/18);
// };
// img.src = '../images/earth.png';

//绘制文字
// context.font="30px serif";
// context.textBaseline='hanging'
// context.fillText('wjw',5,20);