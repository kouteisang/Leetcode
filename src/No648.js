class Tire{

    constructor() {
        this.flag = false;
        this.word = null;
        this.children = {}
    }
}


let root = new Tire();

let dictionary = ["e","k","c","harqp","h","gsafc","vn","lqp","soy","mr","x","iitgm","sb","oo","spj","gwmly","iu","z","f","ha","vds","v","vpx","fir","t","xo","apifm","tlznm","kkv","nxyud","j","qp","omn","zoxp","mutu","i","nxth","dwuer","sadl","pv","w","mding","mubem","xsmwc","vl","farov","twfmq","ljhmr","q","bbzs","kd","kwc","a","buq","sm","yi","nypa","xwz","si","amqx","iy","eb","qvgt","twy","rf","dc","utt","mxjfu","hm","trz","lzh","lref","qbx","fmemr","gil","go","qggh","uud","trnhf","gels","dfdq","qzkx","qxw"]
let sentence = "s"

let lenDictionary = dictionary.length;

for(let i = 0; i < lenDictionary; i ++){
    let word = dictionary[i];
    let lenWord = dictionary[i].length;
    let cur = root;
    for(let j = 0; j < lenWord; j ++){
        if(cur.children[word[j].charCodeAt() - 'a'.charCodeAt()] == null){
            cur.children[word[j].charCodeAt() - 'a'.charCodeAt()] = new Tire();
        }
        cur = cur.children[word[j].charCodeAt() - 'a'.charCodeAt()];
    }
    cur.flag = true;
    cur.word = word;
}

let words = sentence.split(" ");
let ans = []
for(let word of words){
    let cur = root;
    let lenWord = word.length;
    let f = false;
    for(let i = 0; i < lenWord; i ++){
        if(cur.children[word[i].charCodeAt() - 'a'.charCodeAt()] != null){
            cur = cur.children[word[i].charCodeAt() - 'a'.charCodeAt()]
        }else{
            break;
        }
        if(cur.flag == true){
            f = true;
            ans.push(cur.word);
            break;
        }
    }
    if(!f){
        ans.push(word)
    }
}
console.log(ans.join(" "))
