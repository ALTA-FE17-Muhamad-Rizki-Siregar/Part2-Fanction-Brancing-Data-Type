function palindrome(str: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Compare the original and reversed strings
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  console.log(palindrome("katak"))       // true
  console.log(palindrome("kupu-kupu"))       // true
