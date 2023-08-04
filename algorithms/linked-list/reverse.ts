import ListNode from "../../data-structures/linked-list/listNode"

const reverseLinkedList = <T>(head: ListNode<T>): ListNode<T> => {
  let current = head
  let prev: ListNode<T> | null = null

  while (current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next!
  }

  return prev!
}
