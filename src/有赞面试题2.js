

const reNameKey = (key) => {
    let ss = key.split("_");
    let ans = ss[0];
    for(let i = 1; i < ss.length; i ++){
        ans += ss[i][0].toUpperCase() + ss[i].slice(1);
    }
    return ans;
}

const mapKeyToCamelCase = (testData) => {
    if(typeof  testData !== "object") return testData;
    let res = Array.isArray(testData) ? [] : {};
    for(let key in testData){
        let nKey = reNameKey(key);
        res[nKey] = mapKeyToCamelCase(testData[key]);
    }
    return res;
}

const testData = {
    a_bbb: 123,
    a_g: [1, 2, 3, 4],
    a_d: {
        s: 2,
        s_d: 3,
    },
    a_f: [
        1,
        2,
        3,
        {
            a_g: 5
        }
    ],
    a_d_s: 1
}

//转换驼峰
console.log(mapKeyToCamelCase(testData))