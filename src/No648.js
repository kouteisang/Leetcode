/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

class TireTree{
    constructor(){
        this.word = null;
        this.flag = false;
        this.children = {}
    }

    insert(word){
        let len = word.length;
        let cur = this;
        for(let j = 0; j < len; j ++){
            if(cur.children[word[j].charCodeAt() - 'a'.charCodeAt()] == null){
                cur.children[word[j].charCodeAt() - 'a'.charCodeAt()] = new TireTree();
            }
            cur = cur.children[word[j].charCodeAt() - 'a'.charCodeAt()];
        }
        cur.word = word;
        cur.flag = true;
    }

    find(word){
        let len = word.length;
        let cur = this;
        for(let i = 0; i < len; i ++){
            if(cur.children[word[i].charCodeAt() - 'a'.charCodeAt()] != null){
                cur = cur.children[word[i].charCodeAt()-'a'.charCodeAt()]
            }else{
                break;
            }
            if(cur.flag == true){
                return cur.word;
            }
        }
        return word;
    }
}

var replaceWords = function(dictionary, sentence) {
    let ans = [];
    let root = new TireTree();
    for(let i = 0; i < dictionary.length; i ++){
        root.insert(dictionary[i]);
    }
    let words = sentence.split(" ");
    for(let word of words){
        ans.push(root.find(word));
    }
    return ans.join(" ");
};