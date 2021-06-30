const isPass = function (str) {
  var lowerCaseLetters = str.match(/[a-z]/g)
  var upperCaseLetters = str.match(/[A-Z]/g)
  var numbers = str.match(/[0-9]/g)
  return str.length > 7 && lowerCaseLetters && upperCaseLetters && numbers
}
export default isPass
