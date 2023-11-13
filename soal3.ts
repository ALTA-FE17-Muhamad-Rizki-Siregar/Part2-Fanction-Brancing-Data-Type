function primeNumber(number: number): boolean {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Sample Test Cases
  console.log(primeNumber(7));  // Output: true
  console.log(primeNumber(10)); // Output: false