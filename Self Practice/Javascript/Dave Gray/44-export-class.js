// when it is the default export, you don't need to import using a curly brace '{}'
import User from "./44-user-class.js"

const me = new User("email@email.com", "Jude");
console.log(me);
console.log(me.greeting());