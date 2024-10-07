module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let bracketMap = {};
    let openBrackets = [];
    let sameBrackets = new Set();
  
    bracketsConfig.forEach(([open, close]) => {
      bracketMap[close] = open;
      openBrackets.push(open);
      if (open === close) {
        sameBrackets.add(open);
      }
    });
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (openBrackets.includes(char)) {
        if (sameBrackets.has(char) && stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          stack.push(char);
        }
      } else {
        let lastOpenBracket = stack.pop();
        if (bracketMap[char] !== lastOpenBracket) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  