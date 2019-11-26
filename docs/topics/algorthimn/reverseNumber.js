function helper(number) {
  if (number === 0) return "";
  return String(number % 10) + helper((number / 10) >> 0);
}

function reverseNumber(number) {
  if (number === 0) return "0";
  if (number < 0) return String(`-${helper(-1 * number)}`);
  return helper(number);
}

reverseNumber(1234);
