let num = 0;

for (let i = 0; i < 5; i++){
  setTimeout(()=> {
    num += i;
  }, 1000);
}
console.log(num);