function countPrimeNumbers(){
  let primes=4; 
  for (let counter = 2; counter <= 100; counter++)
  {
      let isPrime = 0;

      if(counter % 2 == 0 || counter % 3 == 0 || counter % 5 == 0 || counter % 7 == 0)isPrime=0; 
      else {
          primes++;
      }
  }


  return primes
}

const t0 = window.performance.now()
setTimeout(function() {
  for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
  }
}, 0);
const t1 = window.performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1-t0} milliseconds.`);