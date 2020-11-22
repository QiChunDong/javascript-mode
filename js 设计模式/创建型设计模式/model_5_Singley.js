/**
 * 单例模式
 */

 /**
  *  简单封装 --定义一个命名空间
  * 当然也可以用来区分不同的代码模块 通过命名空间的涵义来区分
  */
 var QI = {
     g: function (id) {
        return document.getElementById(id);
     },
     class: function (id, key, value) {
         // 通过当前对象的this的g来获取元素
         this.g(id).style[key] = value;
     }
 }

 /**
  * 可以构建我们自己的代码库 
  */
var A = {
    Util: {
        util_method1: function () {},
        util_method2: function () {}
    },
    Tool: {
        tool_method1: function () {},
        tool_method2: function () {}
    },
    Ajax: {
        get: function () {},
        post: function () {}
    }
}

// usage
A.Ajax.get();
A.Tool.tool_method1();
A.Util.util_method1();

/**
 * 可以封装私有变量
 */
var Conf = (function () {
    var conf = {
        MAX_NUM : 100,
        MIN_NUM: 1,
        COUNT: 1000
    }

    return {
        get: function (name) {
            return conf[name] ? conf[name] : null;
        }
    }
})()

// usage
var count = Conf.get('COUNT');
console.log('count', count);


var LazySingle = (function () {
    var _instance = null;

    function Single () {
        return {
            publicMethod: function () {},
            publicProperty: '1111'
        }
    }

    return function () {
        if (!_instance) {
            _instance = Single();
        }
        return _instance;
    }
})()

// usage
console.log(LazySingle().publicProperty);