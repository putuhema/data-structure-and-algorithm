const L: { [key: string]: string } = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }

const letterCombinations = (digits: string) => {
  let len = digits.length, ans: string[] = []

  if (!len) return []
  const dfs = (pos: number, str: string) => {
    if (pos === len) ans.push(str)
    else {
      let letter = L[digits[pos]]
      for (let i = 0; i < letter.length; i++) {
        dfs(pos + 1, str + letter[i])
      }
    }
  }

  dfs(0, "")
  return ans
}


console.log(letterCombinations('23'))
