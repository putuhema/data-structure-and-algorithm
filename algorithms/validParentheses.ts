const validParentheses = (s: string) => {

  const stack: string[] = []

  const isOpening = (open: string) => {
    return open === '[' || open === '{' || open == '('
  }
  const isClosing = (close: string) => {
    return close === ']' || close === '}' || close == ')'
  }

  const isMatchingPair = (open: string, close: string) => {
    return (
      (open === '(' && close === ')') ||
      (open === '[' && close === ']') ||
      (open === '{' && close === '}')
    )
  }

  for (let i = 0; i < s.length; i++) {
    if (isOpening(s[i])) {
      stack.push(s[i])
    } else if (isClosing(s[i])) {
      if (!stack.length || !isMatchingPair(stack.pop()!, s[i])) return false
    }
  }

  return stack.length === 0
}

console.log(validParentheses('()[]{}'))
console.log(validParentheses('(]'))
console.log(validParentheses('([])]'))
