function dateDiff(date1, date2) {
  var d1 = parseInt(date1.slice(0, 2))
  var m1 = parseInt(date1.slice(3, 5))
  var y1 = parseInt(date1.slice(6, 10))
  var d2 = parseInt(date2.slice(0, 2))
  var m2 = parseInt(date2.slice(3, 5))
  var y2 = parseInt(date2.slice(6, 10))
  var value1 = d1 + m1 * 30 + y1 * 365
  var value2 = d2 + m2 * 30 + y2 * 365
  if (value1 - value2 >= -2 && value1 - value2 <= 0) {
    return false
  }
  return true
}
export default dateDiff
