let fruits = ['Orange', 'Mango', 'Banana', 'Pineapple'];
console.log('datatype: '+typeof fruits);

console.log('First Item: '+fruits[0]);
console.log('Second Item: '+fruits[1]);
console.log('Third Item: '+fruits[2]);
console.log('Fourth Item: '+fruits[3]);

console.log('Total Number of Item: '+fruits.length);
fruits.push('Apple');
fruits.push('Guava', 'Cucumber');
console.log('Fruits: '+fruits);

fruits.pop();
console.log('Fruits: '+fruits);