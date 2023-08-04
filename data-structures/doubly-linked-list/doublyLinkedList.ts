import DoublyListNode from "./doublyListNode"

class DoublyLinkedList<T> {
  head: DoublyListNode<T> | null
  tail: DoublyListNode<T> | null

  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value: T) {
    const newNode = new DoublyListNode(value)
    newNode.next = this.head

    if (this.head) {
      this.head.prev = newNode
    } else {
      this.tail = newNode
    }

    this.head = newNode

    return this
  }

  append(value: T) {
    const newNode = new DoublyListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    return this
  }


  delete(value: T) {
    // O(N) , O(1)
    if (!this.head) return null

    let deletedNode: DoublyListNode<T> | null = null
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode
        if (deletedNode === this.head) {
          this.head = deletedNode.next
          if (this.head) {
            this.head.prev = null
          } else {
            this.tail = null
          }
        } else {
          let prevNode = deletedNode.prev
          let nextNode = deletedNode.next

          if (nextNode) {
            nextNode.prev = prevNode
          } else {
            this.tail = prevNode
          }
          prevNode!.next = nextNode
        }
      }

      currentNode = currentNode.next!
    }

    return deletedNode
  }

  deleteHead() {
    if (!this.head) return null
    let deletedHead = this.head

    if (this.head.next) {
      this.head = deletedHead.next
      this.head!.prev = null
    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }

  deleteTail() {
    if (!this.tail) return null

    let deletedTail = this.tail

    if (this.tail === this.head) {
      this.head = null
      this.tail = null
    } else {
      this.tail = deletedTail.prev
      this.tail!.next = null
    }

    return deletedTail
  }

  find(value: T) {
    if (!this.head) return null
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) return currentNode.value
      currentNode = currentNode.next!
    }

    return null
  }

  insert(value: T, pos: number) {
    const newNode = new DoublyListNode(value)

    if (pos === 0) {
      newNode.next = this.head
      if (this.head) {
        this.head.prev = newNode
      }
      this.head = newNode
    } else {
      let index = 0
      let currentNode = this.head;
      let prevNode: DoublyListNode<T> | null = null
      while (currentNode && index < pos) {
        prevNode = currentNode
        currentNode = currentNode.next
        index += 1
      }

      if (prevNode) {
        prevNode.next = newNode
      }

      if (currentNode) {
        currentNode.prev = newNode
        newNode.next = currentNode
      } else {
        this.tail = newNode
      }
    }

    return this
  }


  reverse() {
    let currentNode = this.head
    let prevNode: DoublyListNode<T> | null = null
    while (currentNode) {
      let nextNode = currentNode.next
      prevNode = currentNode.prev

      currentNode.next = prevNode
      currentNode.prev = nextNode

      prevNode = currentNode
      currentNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode

    return this
  }

}

