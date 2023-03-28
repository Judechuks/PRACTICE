// super = when used in inheritance refers to the parent class. Commonly used to invoke constructor of a parent class

class Animal{
  constructor (name, age, flySpeed){
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal{
  constructor (name, age, runSpeed){
    super(name, age);  // references the properties from the parent class's constructor
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal{
  constructor (name, age, swimSpeed){
    super(name, age);  // references the properties from the parent class's constructor
    this.swimSpeed = swimSpeed;
  }
}

class Hawk extends Animal{
  constructor (name, age, flySpeed){
    super(name, age);  // references the properties from the parent class's constructor
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);