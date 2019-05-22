class _Node{
  constructor(value,next,prev){
    this.value=value;
    this.next = next;
    this.prev = prev;
  }
}

class DLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  insertFirst(item){
    // when declare newNode, it connects to the head. 
    let newNode = new _Node(item,this.head,null)
    // if head is not null, connect its prev to new node. 
    if(this.head!==null){
      this.head.prev = newNode;
    }
    // if head is null, let newNode becomes head. 
    this.head = newNode;
    // if tail is null, let tail equals newNode. (because newNode has a tail null)
    if(this.tail===null){
      this.tail=newNode;
    }
  }
  insertLast(item){
    let newNode = new _Node(item,null,this.tail);
    if(this.tail!==null){
      this.tail = newNode
    }
    this.tail=newNode;
    if(this.head===null){
      this.head=newNode;
    }
  }
  insertAfter(item,prevItem){
    let currentNode=this.head;
    while(currentNode.value!==item){
      if(currentNode===null){
        console.log('Item not found')
        return
      }
      currentNode = currentNode.next
    }
    if(currentNode===this.last){
      insertLast(item)
    }else{
      let newNode = new _Node(item,currentNode.next,currentNode)
      newNode.next=currentNode.next;
      newNode.prev = currentNode;
      currentNode.next.prev = newNode;
      currentNode.next = newNode;
    }
  }
  remove(item){
    if(!this.head){
      return null;
    }
    let current = this.head;
    while(current.value!==item){
      current = current.next;
      if(current===null){
        console.log('Item to remove is not on the list')
        return null;
      }
    }
    if(current===this.head){
      this.head=current.next
    }else{
      current.prev.next=current.next
    }
    if(current===this.tail){
      this.tail=current.prev;
    }else{
      current.prev.next=current.prev;
    }
  }
}


function displayList(list){
  let currNode = list.head;
  while(currNode!=null){
    console.log(currNode.value)
    currNode = currNode.next
  }
}

function size(list){
  let counter = 0;
  let currNode = list.head;
  if(!currNode){
    return counter
  }
  else{
    counter++
    while(!(currNode.next==null)){
      counter++;
      currNode=currNode.next;
    }
    return counter
  }

  function reverseDLL(list){
    
  }
}