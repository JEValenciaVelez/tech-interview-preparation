function hasBalancedBrackets(string) {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (isOpenBracket(char)) {
      stack.push(char);
    } else if (isCloseBracket(char)) {
      if (stack.length === 0 || !bracketsMatch(stack.pop(), char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function isOpenBracket(char) {
  return char === '[' || char === '(' || char === '{';
}

function isCloseBracket(char) {
  return char === ']' || char === ')' || char === '}';
}

function bracketsMatch(openBracket, closeBracket) {
  return (
    (openBracket === '[' && closeBracket === ']') ||
    (openBracket === '(' && closeBracket === ')') ||
    (openBracket === '{' && closeBracket === '}')
  );
}

// Ejemplos de uso:
console.log(hasBalancedBrackets('{[]()}'));  // Salida: true
console.log(hasBalancedBrackets("{[(])}"));  // Salida: false
console.log(hasBalancedBrackets("{[("));    // Salida: false
console.log(hasBalancedBrackets("{[([{()[]{}}])]}"));        // Salida: false
console.log(hasBalancedBrackets("{[]}}"));  // Salida: true


module.exports = HasBalancedBrackets
