// object.is 判断两个数值完全相等
console.log(Object.is(111,111))
// object.assign对象的合并
const config1 = {
    host:'localhost',
    port: 3306,
    name:'root',
    pass:'root',
    text:"woyehaha"
}

const config2 = {
    host:'http://localhost',
    port: 3307,
    name:'cheng',
    pass:'cheng',
    note:'haha'
}
console.log( Object.assign(config1, config2) )


//Object.setPrototypeOf 设置原型对象
const school = {
    name:"尚硅谷"
}

const cities = {
    xiaoqu:['北京','上海','深圳']
}

Object.setPrototypeOf(school, cities)
console.log(school)
