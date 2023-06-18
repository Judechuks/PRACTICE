// Modules
// Modules are sub-files that contains codes which can be exported and import to and from other codes respectively.
// it has to run on a server (when running this code, use live server)
// type="module" attribute has to be added to the script tag when linking
// when type="module" attribute is used, then there is no need using the 'defer' attribute. 
// because it is added automatically, it also applies strict mode ("use strict")

import playGuitar from "./43-guitar-module.js"; // single importation
import { shredding, plucking } from "./43-guitar-module.js";
console.log(playGuitar());
console.log(shredding());
console.log(plucking());

// when importing, you can change the name of the function

import { shredding as shred, plucking as pluck } from "./43-guitar-module.js";
console.log(shred());
console.log(pluck());

import {sayHi} from "./43-guitar-module.js";
console.log(sayHi());

// you can import all (everything) by using '*'
// then you use the function with a dot notation. 
/* 
import * as Guitars from "./guitars";
console.log(Guitars.playGuitar());
console.log(Guitars.shred());
console.log(Guitars.pluck());
//NOTE: when using this then you make sure not to have a default in your export else, you will have to use it like this
console.log(Guitars.default());
console.log(Guitars.shred());
console.log(Guitars.pluck());
*/
