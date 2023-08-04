export default class DoublyListNode<T> {
  value: T
  next: DoublyListNode<T> | null
  prev: DoublyListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.prev = null
    this.next = null

  }
}
