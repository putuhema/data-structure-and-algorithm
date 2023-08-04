import ListNode from "./listNode";

class LinkedList<T> {
  head: ListNode<T> | null
  tail: ListNode<T> | null

  constructor() {
    this.head = null
    this.tail = null
  }

  preprend(value: T) {
    const newNode = new ListNode(value)
    newNode.next = this.head
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  append(value: T) {
    const newNode = new ListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.tail!.next = newNode
    this.tail = newNode

    return this
  }

  insert(value: T, rawIndex: number) {
    const index = rawIndex < 0 ? 0 : rawIndex

    if (index === 0) {
      this.preprend(value)
    } else {
      let count = 1
      let currentNode = this.head
      const newNode = new ListNode(value)

      while (currentNode) {
        if (count === index) break
        currentNode = currentNode.next
        count += 1
      }

      if (currentNode) {
        newNode.next = currentNode.next
        currentNode.next = newNode
      } else {
        if (this.tail) {
          this.tail.next = newNode
          this.tail = newNode
        } else {
          this.head = newNode
          this.tail = newNode
        }
      }

      return this
    }
  }

  delete(value: T) {
    if (!this.head) return null

    let deletedNode: ListNode<T> | null = null

    if (this.head && this.head.value === value) {
      deletedNode = this.head
      this.head = this.head.next
    }


    let currentNode = this.head

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if (this.tail!.value === value) {
      this.tail = currentNode
    }

    return deletedNode
  }

  find(value: T) {
    if (!this.head) return null

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }

      currentNode = currentNode.next!
    }

    return null
  }

  fromArray(arr: T[]) {
    arr.forEach(val => {
      this.append(val)
    })

    return this
  }

  toArray() {
    let currentNode = this.head
    let arr: T[] = []
    while (currentNode) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }

    return arr
  }

  reverse() {
    let currentNode = this.head
    let prevNode: ListNode<T> | null = null

    while (currentNode) {
      const nextNode = currentNode.next
      currentNode.next = prevNode

      prevNode = currentNode
      currentNode = nextNode

    }

    this.tail = this.head
    this.head = prevNode
  }
}

export default LinkedList
