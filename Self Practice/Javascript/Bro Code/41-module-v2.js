/*
Alternatively of using
import {PI, myCircumference, myArea} from "./40-math_util.js";
*/

// By importing everything '*' and giving it an alias 'MathUtil' using the 'as' keyword
import * as MathUtil from "./40-math_util.js";

let circumference = MathUtil.myCircumference(10);
console.log("Circumference:", circumference);

let area = MathUtil.myArea(10);
console.log("Area: ", area);