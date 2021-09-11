function getWordCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ' || (i===str.length-1) && str[i+1]!=" " ){
        count++;
      }
    }
    return count;
  }
  let str = 'Rakibul Islam';
  let str2= "I will count the word from this string";
  console.log(getWordCount(str));  // 2
  console.log(getWordCount(str2));  // 8