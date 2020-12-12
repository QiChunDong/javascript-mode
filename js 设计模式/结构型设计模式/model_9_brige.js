/**
 * 桥接模式
 * 系统沿多个维度发展， 不增加复杂度，实现解耦
 */

//抽象公共方法
var changeColor = function (dom, color, bg) {
    dom.style.color = color;
    dom.style.backgroud = bg;
}

// 进行元素和方法之间的桥接
// var test = document.getElementById('test');
// test.onmouseover = function () {
//     // 绑定this
//     changeColor(this, 'red', 'white');
// }


// 案例
function Speed(x, y) {
    this.x = x;
    this.y = y;
}

Speed.prototype.run = function() {
    console.log('动起来');
}

function Color(cl) {
    this.color = cl;
}
Color.prototype.draw = function() {
    console.log('着色');
}

function Shape(sp) {
    this.shape = sp;
}
Shape.prototype.change = function() {
    console.log('变形');
}

function Speek(wd) {
    this.word = wd;
}
Speek.prototype.say = function() {
    console.log('说话');
}

function Ball(x, y, cl) {
    this.speed = new Speed(x, y);
    this.color = new Color(cl);
}
Ball.prototype.init = function() {
    this.speed.run();
    this.color.draw();
}

// 测试案例 1 球
var ball = new Ball(1, 2, 'red');
ball.init();