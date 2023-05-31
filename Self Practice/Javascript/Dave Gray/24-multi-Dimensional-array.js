const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept);
console.log(clothesDept);

console.log(equipDept[0][1]);  // football (1st array 2nd item)
console.log(equipDept[1][2]);  // tennis balls (2nd array 3rd item)
console.log(clothesDept[0][2]);  // jerseys (1st array 3rd item)
console.log(clothesDept[1][0]);  // sweat tops balls (2nd array 1st item)

const sportsStore = [equipDept, clothesDept];

console.log(sportsStore);
console.log(sportsStore[0][1][2]); // 3 item of the 2nd array of the 1st array 
// output: tennis balls
