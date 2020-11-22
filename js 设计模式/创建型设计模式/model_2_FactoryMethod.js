/**
 * 工厂类方法 使用安全类 如果直接执行 判断this的指向 不是Factory就是创建 是执行工厂方法
 * @param {对象类型} type 
 * @param {内容} content 
 */
var Factory = function (type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content)
        return s
    } else {
        return new Factory(type, content)
    }
}

// 向工厂类的原型上添加不同的属性
Factory.prototype = {
    java: function(content) {
        this.title = content + 'java'
    },
    javascript: function(content) {
        this.title = content + 'js'
    },
    c: function(content) {
        this.title = content + 'c'
    },
    py: function(content) {
        this.title = content + 'py'
    },
}

var factory = new Factory('java', 'js')
factory.prototype.show = function () {
    console.log(this.title + ' yes!')
}

factory.show()


