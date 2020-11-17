/**
 * 抽象工厂 模式
 */
var VehicleFactory = function(subType, superType) {
    // 判断是否有
    if (typeof VehicleFactory[superType] == 'function') {
        function F() {}
        F.prototype = new VehicleFactory[superType]()
        F.constructor = subType
        subType.prototype = new F()
    } else {
        throw new Error("没有对应的抽象类")
    }
}

// 小汽车类
VehicleFactory.Car = function() {
    this.type = 'Car'
}
VehicleFactory.Car.prototype = {
    getPrice : function() {
        return new Error('此方法不能调用')
    },
    getSpeed: function () {
        return new Error('此方法不能调用')
    }
}

// 公交车类
VehicleFactory.Bus = function() {
    this.type = 'Bus'
}
VehicleFactory.Bus.prototype = {
    getPrice : function() {
        return new Error('此方法不能调用')
    },
    getSpeed: function () {
        return new Error('此方法不能调用')
    }
}

// 货车类
VehicleFactory.Truck = function() {
    this.type = 'Truck'
}
VehicleFactory.Truck.prototype = {
    getPrice : function() {
        return new Error('此方法不能调用')
    },
    getSpeed: function () {
        return new Error('此方法不能调用')
    }
}

// 测试  创建宝马汽车
var BMW = function (price, speed) {
    this.price = price
    this.speed = speed
}
console.log(BMW, '1')
VehicleFactory(BMW, 'Car')
console.log(BMW, '2')
BMW.prototype.getPrice = function () {
    return this.price
}
BMW.prototype.getSpeed = function () {
    return this.speed
}
console.log(BMW, '3')

var bmw001 = new BMW(123, 456)
console.log(bmw001)
console.log(bmw001.getPrice())
console.log(bmw001.getSpeed())


