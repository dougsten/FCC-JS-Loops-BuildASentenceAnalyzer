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
};

function getPunctuationCount(sentence) {
  let punctuationCount = 0;
  const punctuationMarks = ".,!?;:'\"-()[]{}";
  for(let char of sentence) {
    if(punctuationMarks.includes(char)) {
      punctuationCount += 1;
    } 
  }
  return punctuationCount;
};

function getWordCount (sentence) {
  if(sentence.trim() === "") {
    let words = 0;
    typeof words === 'number';
    console.log(words);
    return words;
  }
  let words = sentence.trim().split(/\s+/);
  console.log(words);
  return words.length;
};

// const vowels = "aeiouAEIOU";
// const sentence = "I love freeCodeCamp";
// getVowelCount(sentence);
// let vowelCount = getVowelCount(sentence);
// console.log(`Vowel Count: ${vowelCount}`);
// let consonantCount = getConsonantCount(sentence);
// console.log(`Consonant Count: ${consonantCount}`);
// let punctuationCount = getPunctuationCount(sentence);
// console.log(`Punctuation Count: ${punctuationCount}`);
let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
