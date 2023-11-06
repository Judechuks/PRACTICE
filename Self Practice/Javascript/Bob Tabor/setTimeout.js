let num = 0;

for (let i = 0; i < 5; i++){
  setTimeout(()=> {
    num += i;
    console.log(num);
  }, 6000);
}
// The program will wait until it is 6 seconds before displaying the result