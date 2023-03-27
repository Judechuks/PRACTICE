// inheritance = a child class can inherit all the properties and mthods from another class (parent)
class Animal{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }

  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal{  // means inherit properties and method from Animal class
  name = "Rabbit";

  run(){
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal{  // means inherit properties and method from Animal class
  name = "Fish";

  run(){
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal{  // means inherit properties and method from Animal class
  name = "Hawk";

  fly(){
    console.log(`This ${this.name} is flying`);
  }
}

// creating different object from the different class
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
// rabbit.fly();  // rabbit.fly() is not a function