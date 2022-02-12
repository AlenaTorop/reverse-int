module.exports = function reverse(n) {
	let newN = Math.abs(n);
  let newArr = Array.from(newN.toString().split(''));
	return Number(newArr.reverse().join(''));
}
