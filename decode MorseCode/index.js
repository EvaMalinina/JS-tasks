// The task is to implement a function that would take the morse code as input
// and return a decoded human-readable string.
//
// Example:
// decodeMorse('.... . -.--   . . . ...- .-')
// should return "hey eva"

let MORSE_CODE = {
  "-----":"0",
  ".----":"1",
  "..---":"2",
  "...--":"3",
  "....-":"4",
  ".....":"5",
  "-....":"6",
  "--...":"7",
  "---..":"8",
  "----.":"9",
  ".-":"a",
  "-...":"b",
  "-.-.":"c",
  "-..":"d",
  ".":"e",
  "..-.":"f",
  "--.":"g",
  "....":"h",
  "..":"i",
  ".---":"j",
  "-.-":"k",
  ".-..":"l",
  "--":"m",
  "-.":"n",
  "---":"o",
  ".--.":"p",
  "--.-":"q",
  ".-.":"r",
  "...":"s",
  "-":"t",
  "..-":"u",
  "...-":"v",
  ".--":"w",
  "-..-":"x",
  "-.--":"y",
  "--..":"z",
  "/":" ",
  "-·-·--":"!",
  "·-·-·-":".",
  "--··--":","
};

decodeMorse = function(morseCode){
  let words = morseCode.split("   ")
  let str = ""

  for (let indexOfWord in words) {
    if (words[indexOfWord] !== "") {
      let lettersArr = words[indexOfWord].split(" ");

      for ( let letter in  lettersArr) {
        if ( letter !== "") {
          str += MORSE_CODE[lettersArr[letter]]
        }
      }
      if (indexOfWord < words.length - 1) {
        str += " "
      }
    }
  }
  return str;
}

decodeMorse('.... . -.--   . ...- .-')
