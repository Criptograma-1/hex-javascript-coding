function countPrimeNumbers() {
  for (let i = 2; i <= 100; i++) {
    if(i % i != 0) count++;
  }
}

let t0 = performance.now();
countPrimeNumbers();
let t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1-t0} milliseconds.`);