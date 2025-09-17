function getVowelCount(sentence) {
  let vowelCount = 0;
  for(let char of sentence) {
    if(vowels.includes(char)) {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

function getConsonantCount(sentence) {
  let consonantCount = 0;
  for(let char of sentence) {
    if(!vowels.includes(char) && /[a-zA-Z]/.test(char)) {
      consonantCount += 1;
    }
  }
  return consonantCount;
}

const vowels = "aeiouAEIOU";
const sentence = "Coding is fun";
getVowelCount(sentence);
let vowelCount = getVowelCount(sentence);
console.log(`Vowel Count: ${vowelCount}`);
let consonantCount = getConsonantCount(sentence);
console.log(`Consonant Count: ${consonantCount}`);

