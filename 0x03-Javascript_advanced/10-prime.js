function countPrimeNumbers() {
  for (let i = 2; i <= 100; i++) {
    if(i % i != 0) count++;
  }
}

let t0 = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
let t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1-t0} milliseconds.`);