module.exports = function reverse(n) {

  const result = Number(Math.abs(n).toString().split('').reverse().join(''));

  console.log(result)
  
  return result
}
