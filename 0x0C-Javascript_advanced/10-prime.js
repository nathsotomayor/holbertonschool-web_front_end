const countPrimeNumbers = () => {
  let prime = [];
  for (let i = 2; i < 100; i++) {
    if (i % 2 != 0)
      prime.push(i);
  }
  return prime;
}

let start = window.performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
let finish = window.performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${finish - start} miliseconds`);