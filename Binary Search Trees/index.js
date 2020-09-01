const { indigo } = require("color-name");

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        
        if( !this.root){
            this.root = newNode;
            return this;
        }

        let isTraversing = true;
        let currentNode = this.root;

        while(isTraversing){

            if( value === currentNome.value){
                isTraversing = false;
            }

            if( value < currentNode.value  ){
               //left side of the tree
               if( currentNode.left === null ) {
                   currentNode.left = newNode;
                   isTraversing = false;
               } else {
                currentNode = currentNode.left;
               }
                
            } else {
                //right side of the tree
                if( currentNode.right === null ) {
                    currentNode.right = newNode;
                    isTraversing = false;
                } else {
                    currentNode = currentNode.right;
                }
               
            }

            if( !currentNode ){
                isTraversing = false;
            }

        };

        return this;
    }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(1);
tree.insert(3);
tree.insert(16);
tree.insert(18);
tree.insert(2);
tree.insert(5);
tree.insert(8);

console.log( tree );