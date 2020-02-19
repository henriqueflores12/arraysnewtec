/*creating an array...
the values are assigned to the array inside a pair of square brakets,end each value is separeted by comma.the value in the array do not need to be the same data type.so you can store a string ,number and a boolean all in the same array. */
var color = ['white','black','grey','blue','red','brown'];

var el = document.getElementById('color');

el.textContent = color[0];
console.log(color);