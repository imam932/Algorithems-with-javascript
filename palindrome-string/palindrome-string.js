function reverse(s) {
    var o = [];
    for (var i = 0, len = s.length; i <= len; i++)
     o.push(s.charAt(len - i));
     return o.join('');
  }
  
  function isPalindrome(word, words) {
    return word === reverse(word) && !words.includes(word)
  }
  
  function countPalindromesInString(s) {
      let subStrings = [];
      for (let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length - i; j++) {
          let subString = s.substring(j, j + i + 1);
          if(isPalindrome(subString, subStrings)) {
              if (subString.length !== 1) {
                  subStrings.push(subString);
              }
          }
      }
    }
    console.log(subStrings);
    
    return subStrings.length;
  }

  console.log(countPalindromesInString("aadafdkfkf"));
  