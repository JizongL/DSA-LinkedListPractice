class _Node{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    insertFirst(item){
        this.head = new _Node(item, this.head)
    }

    insertLast(item){
        if(this.head===null){
            this.insertFirst(item)
        }
        else{
            let tempNode = this.head;
            while(tempNode.next!==null){
                tempNode = tempNode.next;
            }
            tempNode.next= new _Node(item,null);
        }
    }
    find(item){
        let currNode = this.head;
        if(!this.head){
            return null
        }
        while(currNode.value!==item){
            if(currNode.next===null){
                return null;
            }
            else{
                currNode=currNode.next;
            }
        }
        return currNode;
    }

    remove(item){
        if(!this.head){
            return null
        }
        if(this.head.value===item){
            this.head=this.head.next
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while((currentNode!==null)&&(currNode.value!==item)){
            previousNode = currNode;
            currNode = currNode.next
        }
        if(currNode===null){
            console.log('Item not found')
            return;
        }
        previousNode.next = currNode.next
    }
}



function display(SLL){
    let currNode = SLL.head
    console.log('display ran')
    if(currNode===null){
        console.log('list is empty')
        return;
    }
    while(currNode!==null){
        
        console.log(currNode.value)
        currNode = currNode.next
    }
    return 
}

function inserBefore(SLL,itemToInsert,key){
    
    let currNode = SLL.head
    let previousNode = SLL.head
    while((currNode!==null)&&(currNode.value!==key)){        
        previousNode = currNode;
        currNode = currNode.next
    }
    if(currNode===null){
        return 'key item not found'
    }
    let InsertNode = new _Node(itemToInsert,currNode)
    previousNode.next = InsertNode
    return SLL
}
function insertAfter(SLL,itemToInsert,key){
    let currNode = SLL.head 
    let nextNode = SLL.head
    while((currNode!==null)&&(currNode.value!==key)){
        currNode=currNode.next
        nextNode = currNode.next

    }
    if(currNode===null){
        return 'key item not found'
    }
    let InsertNode = new _Node(itemToInsert,nextNode)
    currNode.next = InsertNode
    return SLL
}

function insertAt(SLL,itemToInsert,position){
    let currNode = SLL.head
    let prevNode = SLL.head 
    let counter = 1
    if(currNode===null){
        newNode = new _Node(itemToInsert,currNode)
        currNode = currNode.next
        return currNode
      }

    while((currNode!==null)&&(counter<position)){
        counter ++
        prevNode = currNode
        currNode =currNode.next
        
    }
    
    if(currNode===null){
        console.log('list length is shorter than position to be inserted')
        return
    }
    
    newNode = new _Node(itemToInsert,currNode)
    prevNode.next = newNode
    return SLL
}

function size(SLL){
    let counter = 0
    let currNode=SLL.head
    while(currNode!==null){
        counter ++
        prevNode = currNode
        currNode =currNode.next
        
    }
    return `List has length of ${counter}`
}

function isEmpty(SLL){
    return SLL.head===null
}

function findPrevious(SLL,key){
    let currNode = SLL.head
    let prevNode = SLL.head
    if(currNode===null){
        return 'list is empty'
    }
    while(currNode!==null && currNode.value !==key){
        prevNode = currNode
        currNode=currNode.next
    }
    if(currNode===null){
        return 'key does not exist'
    }
    return prevNode.value
}

function findLast(SLL){
    let currNode = SLL.head
    let prevNode = SLL.head
    if(currNode===null){
        return 'list is empty'
    }
    while(currNode!==null){
        prevNode = currNode
        currNode = currNode.next
    }
    
    return prevNode.value
}

function thirdFromTheEnd(SLL){
    
    if(size(SLL)<4){
        return 'list is less than 3 in length'
    }
    let thirdFromEnd = SLL.head 
    let end = SLL.head.next.next.next
    while(end!==null){
        thirdFromEnd=thirdFromEnd.next
        end = end.next
    }
    
    return thirdFromEnd.value

}

function main(){
    const SLL = new LinkedList;
    console.log('insert elements in list')
    console.log('---------')
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    console.log('---------')
    console.log('test insert before, add Athena before Boomer')
    inserBefore(SLL,'Athena','Boomer');    
    display(SLL)
    console.log('---------')
    console.log('test insertAfter, insert Hotdog after Helo')
    insertAfter(SLL,'Hotdog','Helo')
    display(SLL)
    console.log('test insertAt')
    insertAt(SLL,'Kat',10)
    console.log('---------')
    console.log('after insertAt')
    display(SLL)
    console.log('test size')
    console.log(size(SLL))
    console.log('---------')
    console.log('test isEmpty')
    emptyList = new LinkedList
    console.log(isEmpty(SLL),'expected to be false,non-empty list')
    console.log(isEmpty(emptyList),'expected to be true,empty list')
    console.log('---------')
    console.log('test display')
    console.log(display(SLL))
    console.log('---------')
    console.log('test find previous')
    console.log(findPrevious(SLL,'Starbuck'))
    console.log('---------')
    console.log('test find last')
    console.log(findLast(SLL))
    console.log('test thirdFromEnd')
    let lessThan3 = new LinkedList
    lessThan3.insertFirst('1')
    lessThan3.insertLast('2')    
    
    console.log(thirdFromTheEnd(lessThan3))    
    lessThan3.insertLast('3')
    lessThan3.insertLast('4')
    lessThan3.insertLast('5')
    console.log(thirdFromTheEnd(lessThan3))
    
    return SLL
}



main()

// Mysterious program 
// This program eliminate all duplicate values that equal to the head value of the SLL. 
// The big O is O()




function reverseSLL(SLL){
    let lastNode  
    let tempNode = new _Node() 
    let Node = SLL.head
    while(Node.value!==null){
        tempNode = Node.next
        Node.next = lastNode
        lastNode = Node
        Node = tempNode
    }    
}




