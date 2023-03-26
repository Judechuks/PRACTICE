// for loop
console.log('for loop');
for (i = 0; i < 10; i++){
  console.log(i);
}

// while loop
console.log('while loop');
let x = 1;
while (x < 10){
  console.log(x++);
}

//break to quit a loop, iteration
//used alongside if-condition
console.log('while loop with break')
let y = 1;
while (y > 0){
  console.log(y++);
  if (y == 1000) break;
}
