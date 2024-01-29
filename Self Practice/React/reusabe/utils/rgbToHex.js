function componentToHex(c) {
  var hex = c.toString(16);
  // gets the hex value by doing divide and reminder method with base 16
  // 10=a, 11=b, 12=c, 13=d, 14=e, 15=f
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  // each hex value for red, green and blue is then added together with '#' to give you hex code
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
export default rgbToHex;
