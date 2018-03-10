
let score = 0;

function generateKey() {
  const char = ['+', '-', '*', '/'];
  const key = Math.floor(Math.random() * 4);
  return char[key];
}

function operation(num1, num2, key) {
  switch (key) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return Math.round(num1 / num2 * 10) / 10;
  }
}

function generate() {
  const min = -10;
  const max = 10;
  const res = Math.round(Math.random() * (max - min) + min);
  return res ? res : max;
}

async function main() {
  while (true) {
    const numberFirst = generate();
    const numberSecond = generate();
    const key = generateKey();
    const result = operation(numberFirst, numberSecond, key);
    const answ = prompt(`${numberFirst} ${key} ${numberSecond} = `);

    if (answ == '!exit') {
      alert(`Содержание алкоголя ~${score / 10}00 промилле!`);
      break;
    }

    if (Number(answ) == result) {
      alert('Наливай еще!');
    } else {
      score++;
      alert(`Хватит пить!\nВерный ответ: ${result}`);
    }
  }
}
main();