module.exports = function main(str) {
  // Write your code here
  var len = String(str).length
  var sum = 0
  for (var i = 0;i< len; i++) {
    // console.log(String(str).charAt(i))
    sum += Number(String(str).charAt(i))
  }
  console.log(sum)
  return sum
};
// var anyString = "123";

// a = console.log(anyString.charAt(0));
// b = console.log(anyString.charAt(1));
// c = console.log(anyString.charAt(2));
// d = console.log(anyString.charAt(3));


// var e = Number(a) + Number(b) + Number(c)
//  return e

// var str="Hello world!"
// document.write(str.charAt(1))