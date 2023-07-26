const prompt = require("prompt-sync")()

function countVowelsAndConsonants(str) {
   
    str = str.toLowerCase();
  
   
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  
    let vowelCount = 0;
    let consonantCount = 0;
  
   // node 
   
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (vowels.includes(char)) {
        vowelCount++;
      } else if (consonants.includes(char)) {
        consonantCount++;
      }
    }
  
    return { vowels: vowelCount, consonants: consonantCount };
  }
  

  const inputString = prompt('Enter String: ');
  const result = countVowelsAndConsonants(inputString);
  console.log(result); 
  