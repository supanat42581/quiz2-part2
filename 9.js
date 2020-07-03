const maxPossibleNumber = (number) => {
    let newNumber;
    let count;
    let StrNumber = String(number);
    let total;
  
    newNumber = StrNumber.split("");
    count = newNumber.length - newNumber.findIndex((item) => item === ".") - 1;
    newNumber.sort((a, b) => Number(b) - Number(a));
    sum = newNumber.reduce((sum, num) => sum + num);
    total = Number(sum) / 10 ** Number(count);
    if (StrNumber.includes(".")) {
      return Number(total);
    }
    return Number(sum);
  };
  console.log(maxPossibleNumber(327.4));