function iqTest(numbers){

  numbers.replace( /\s/g, "")
  console.log(numbers)
  for ( let num of numbers) {

    if (numbers[num] % 2 !== 0 && numbers[num] !== " ") {

      return +num+1
    }
  }
}

console.log(iqTest("2 4 7 8 10"))
