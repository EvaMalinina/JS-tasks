// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should
// replace the missing second character of the final pair with an underscore ('_').

// solution('abc') // should return ['ab', 'c_']

function solution(str){
  if (str.length == 0) {
    return [];
  }

  str.length % 2 ? str = str + '_' : str;
  return str.match(/../g);
}

console.log(solution('sxsjk'))

