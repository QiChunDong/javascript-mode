/**
 * 装饰者 模式
 * 不改变原来对象的基础上进行拓展
 * 
 */

// 先执行旧的事件函数 再执行新的事件函数
var  decoratior = function (input, fn) {
    var input  = document.getElementById(input);
    if (typeof input.onclick == 'function') {
        var oldClick = input.onclick;
    input.onclick = function () {
        oldClick();
        fn();
    }
    } else {
    input.onclick = fn;
    }
}

// 使用
decoratior('someId', function() {
    // do some thing
})