const prompt = require("prompt-sync")()

function isPalindrome(str) {
 
    const cleanStr = str.toLowerCase();
  
  

    let left = 0;
    let right = cleanStr.length - 1;



    // console.log(left, right);

    // N O D E
  
    while (left < right) {
      if (cleanStr[left] !== cleanStr[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  

  const inputString = prompt('Enter String: ');
  console.log(isPalindrome(inputString)); 
  


 
 