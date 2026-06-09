const code1 = 7 + 3;
const code2 = 82 / 2 - 1;
const code3 = (179 % 4) * 13;
const message = "The vault has been secured. The combination is:";
const codeA = code1 + "-" + code2 + "-" + code3;
const codeB = `${code1}-${code2}-${code3}`;
console.log(message, codeA, codeB);
