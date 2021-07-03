var isalpha = function (ch) {
  return /^[A-Z]$/i.test(ch)
}
var isdigit = function (ch) {
  return /^[0-9]$/i.test(ch)
}
var ischar = function (ch) {
  return !isalpha(ch) && !isdigit(ch)
}
const isPass = function (str) {
  var len = str.length
  var i = 0
  var c = false
  for (i = 0; i < len; i = i + 1) {
    if (ischar(str[i])) {
      c = true
      break
    }
  }
  return c && str.length > 4
}
export default isPass
