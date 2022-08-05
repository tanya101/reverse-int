module.exports = reverse = (n) => {

  const result = Number(Math.abs(n).toString().split('').reverse().join(''));

  console.log(result)
  
  return result
}

// 123 => 321


reverse(123566)