import LinkedList from "../../data-structures/linked-list/linkedList"
import ListNode from "../../data-structures/linked-list/listNode"

const isPalindrome = (head: ListNode<number>) => {
  let slow = head // middle value
  let fast = head // traverse twice as fast slow
  let prev: ListNode<number> | null = null

  // when fast pointer reaches the end of the list
  // the slow pointer must then be in the middle
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next.next!
  }
  prev = slow
  slow = slow.next!
  prev.next = null // break the reverse cycle and avoid an endless loop

  while (slow) {
    const temp = slow.next
    slow.next = prev
    prev = slow
    slow = temp!
  }
  fast = head
  slow = prev!


  while (slow) {
    if (fast.value !== slow.value) {
      return false
    } else {
      fast = fast.next!
      slow = slow.next!
    }
  }

  return true
}


