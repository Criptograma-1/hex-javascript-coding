  function countPrimeNumbers() {
    let count = 4;
    for (let i = 2; i <= 100; i++) {
      if(i % 2 == 0 && i % 3 == 0 && 
         i % 5 == 0 && i % 7 == 0)count=count;
      else { count++; }
    } 
    return count;
  }

let t0 = performance.now();
countPrimeNumbers();
let t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1-t0} milliseconds.`);