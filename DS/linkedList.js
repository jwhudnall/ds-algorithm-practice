/* Implementation of a Linked List.
Source: https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
*/

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head=null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }
  clear() {
    this.head = null;
  }
  getLast() {
    let node = this.head;
    if(node) {
      while (node.next) {
        node = node.next;
      }
    }
    return node;
  }
  getFirst() {
    return this.head;
  }
  // insert()
  // remove()
}