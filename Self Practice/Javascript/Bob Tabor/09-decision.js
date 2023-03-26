// if statement
if ( 3 > 4){
  console.log('3 is greater than 4')
}else if (3 == 4){
  console.log('3 is equal to 4')
}else{
  console.log('3 is less than 4')
}

// switch statement
let hero = 'superman';
// let hero = 'batman';
// let hero = 'aquaman';
switch (hero){
  case 'superman': 
        console.log('super strength');
        console.log('x-ray vision');
  case 'batman': 
        console.log('intelligence');
        console.log('fighting skills');
  default: 
        console.log('brave');
        console.log('member of Justice league');
}
console.log('');
// switch statement with break
let heroes = 'superman';
// let hero = 'batman';
// let hero = 'aquaman';
switch (heroes){
  case 'superman': 
        console.log('super strength');
        console.log('x-ray vision');
        break;
  case 'batman': 
        console.log('intelligence');
        console.log('fighting skills');
        break;
  default: 
        console.log('brave');
        console.log('member of Justice league');
}