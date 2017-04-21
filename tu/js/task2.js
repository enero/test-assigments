"use strict";

function checkSyntax(str) {
  var bracesOpen = {
        '<': '>',
        '[': ']',
        '{': '}',
        '(': ')'
      },
      bracesClose = {},
      stack = [],
      current;

  for (var k in bracesOpen) {
    bracesClose[bracesOpen[k]] = k;
  }

  for (var i = 0; i < str.length; i++) {
    current = str[i];
  	if (bracesOpen.hasOwnProperty(current)) {
    	stack.push(bracesOpen[current]);
    } else if (bracesClose.hasOwnProperty(current)) {
      if (stack.length == 0 || stack.pop() !== current) {
        return 1;
      }
    }
  }

  return (stack.length == 0) ? 0 : 1;
}

console.log('1) ', checkSyntax("---(++++)----"), 0);
console.log('2) ', checkSyntax(""), 0);
console.log('3) ', checkSyntax("before ( middle []) after "), 0);
console.log('4) ', checkSyntax(") ("), 1);
console.log('5) ', checkSyntax("} {"), 1);
console.log('6) ', checkSyntax("<(   >)"), 1);
console.log('7) ', checkSyntax("(  [  <>  ()  ]  <>  )"), 0);
console.log('8) ', checkSyntax("   (      [)"), 1);
