/**
 * 适配器
 * 将一个类的接口转换成另外一个类的接口，适配数据
 * 
 */


 ///////////////////////////异类架构进行适配///////////////////////
 //封装一个简单的框架 绑定事件 乐死与jq
var A = A || {};
A.g = function (id) {
    return document.getElementById(id);
}
A.on = function (id, type, fn) {
    var dom = typeof id == 'string' ? this.g(id) : id;
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }

}

A.on(window, 'click', function() {
    console.log('you click a dom');
});


// 对on与jq进行适配
A.on = function (id, type, fn) {
    // 改造点是$(id )
    var dom = typeof id == 'string' ? this.g(id) : $(id);
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }

}



 //////////////////////////参数进行适配///////////////////////
 function doSomeThing(title, age, name) {}
 /**
  * 
  * @param {
  * title,
  * age,
  * name
  * } obj 
  */
 function doSomeThing(obj) {}

 //参数适配
 /**
  * 
  * @param obj 
  */
 function doSomeThing(obj) {
    // 给默认值 
    var _adapter = {
         title: '1',
         age: '2',
         name: '3'
     }
     for(var i in _adapter) {
         _adapter[i] = obj[i] || _adapter[i]
     }
 }


  //////////////////////////数据进行适配///////////////////////
  var arr = ['1', '2', '3'];
  var obj = {
      name: '',
      age: '',
      title: ''
  }
  function arr2Obj(arr) {
    return {
        name: arr[0],
        age: arr[1],
        title: arr[2]
    }
  }