import java.util.*;

class Node{
    Node before, next;
    int key, value;
    public Node(){

    }
    public Node(int key, int value){
        this.key = key;
        this.value = value;
        this.before = null;
        this.next = null;
    }

}

class LRUCache {

    Map<Integer, Node> map = null;
    Node head = null;
    Node tail = null;
    int capacity = 0;
    public LRUCache(int capacity) {
        map = new HashMap();
        head = new Node();
        tail = new Node();
        head.next = tail;
        tail.before = head;
        this.capacity = capacity;
    }

    public int get(int key) {
        if(map.get(key) == null){
            return -1;
        }else {
            moveToHead(key);
            return map.get(key).value;
        }
    }

    public void put(int key, int value) {
        if(map.get(key) != null){
            moveToHead(key);
            map.get(key).value = value;
        }else{
            if(map.keySet().size() == capacity){
                delTail();
                insertHead(key, value);
            }else{
                insertHead(key, value);
            }
        }
    }

    public void delTail(){
        map.remove(tail.before.key);
        tail.before = tail.before.before;
        tail.before.next = tail;
    }

    public void insertHead(int key, int value){
        Node node = new Node(key, value);
        node.before = head;
        node.next = head.next;
        node.next.before = node;
        head.next = node;
        map.put(key, node);
    }

    public void moveToHead(int key){
        Node cur = map.get(key);
        cur.before.next = cur.next;
        cur.next.before = cur.before;
        cur.next = head.next;
        head.next.before = cur;
        head.next = cur;
        cur.before = head;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */