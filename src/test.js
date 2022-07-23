 function Node(val, next, random) {
     this.val = val;
     this.next = next;
     this.random = random;
  };


/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let tHead = new Node(0);
    let nhead = head;
    while(nhead != null){
        let node = new Node(nhead.val);
        node.next = nhead.next;
        nhead.next = node;
        nhead = node.next;
    }
    nhead = head;
    while(nhead != null){
        nhead.next.random = nhead.random.next;
        nhead = nhead.next.next;
    }
    nhead = head;
    let ans = tHead;
    while(nhead != null){
        tHead.next = nhead.next;
        tHead = tHead.next;
        nhead.next = tHead.next;
        nhead = nhead.next;
    }
    return ans.next;

};

let one = new Node(1);
let two = new Node(2);
one.next = two;
one.random = two;
two.next = null;
two.random = two;

let res = copyRandomList(one);

while (res != null){
    console.log(res.val)
    res = res.next;
}