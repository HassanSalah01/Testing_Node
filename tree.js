class Node {
    constructor() {
        this.value = null;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.head  = this.temp = null;
    }
    push(val){
        let temp = this.head;
        let node = new Node();
        node.value = val;
        if(this.head == null){
            this.head = this.temp = node;
        }else if(temp.value > val){
            while(temp.value > val && temp.left != null){
                temp = temp.left;
            }
            temp.left = node;
        }
    }
    print(){
        console.log(this.head)
    }
}
let tree = new Tree();
tree.push(5);
tree.push(2);
tree.push(1);
tree.print();

