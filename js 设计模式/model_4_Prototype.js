/**
 * 建造者模式
 */


// 人物类
var Human = function(param) {
    // 技能
    this.skill = param && param.skill || '保密'
    this.hobby = param && param.hobby || '保密'
}
Human.prototype = {
    getSkill : function () {
        return this.skill
    },
    gethobby : function () {
        return this.hobby
    }
}

// 姓名类
var named = function (name) {
    var that = this;
    // 构造器
    (function (name, that) {
        that.wholeName = name
        if (name.indexOf(' ') > -1) {
            that.Firstname = name.split(' ')[0]
            that.secondName = name.split(' ')[1]
        }
    })(name, that)
}

// 职位类
var Work = function (work) {
    var that = this;
    (function (work, that) {
        switch (work) {
            case 'coder' :
                that.work = '工程师'
                that.workDescription = '每天沉醉于编程'
                break
            case 'UI' :
            case 'UE' :
                that.work = '设计师' 
                that.workDescription = '设计更类似与一种艺术'
                break
            case 'teach' :
                that.work = '教师'
                that.workDescription = '分享也是一种快乐'
                break
            default :
                that.work = work
                that.workDescription = '对不起我们还不清楚您所选择职位的描述'
        }
    })(work, that)
}
Work.prototype.changeWork = function (work) {
    this.work = work
}
Work.prototype.changeWorkDescription = function (desc) {
    this.workDescription = desc
}


// 使用实例 建造一个对象 使用定义好的组件 细化每个细节 把每个属性进行拆分
// 建造者不仅仅像工厂那样注重结果 也可以自定义细节 这样可以建造出更加复杂的对象
var Person = function (name, work) {
    var _person = new Human({skill: 'LOL', hobby: 'LOL IN LOL'})
    _person.name = new named(name)
    _person.work = new Work(work)
    return _person
}

var person = new Person('xiao ming', 'coder')
console.log(person.name.Firstname)
console.log(person.name.secondName)
console.log(person.skill)
console.log(person.work.work)
console.log(person.work.workDescription)
