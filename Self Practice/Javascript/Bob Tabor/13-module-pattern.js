//Don't make it an often practice to declare global variable when using DOM rather using IIFE e.g.
var counter = (function() {
  //private stuff
  let count = 0; 
  
  function print(message) {
    console.log(message + "=== " + count);
  }

  //return an object
  return {
    // value: count, // Don't use this rather use set() and get() functions

    get: function() { return count; },

    set: function(value) { count = value; },


    increment: function(){
      count += 1;
      print('After increment: ');
    },

    reset: function() {
      print('Before reset: ');
      count = 0;
      print('After reset: ');
    }
  }
})();

counter.increment();
counter.increment();
counter.increment();

// Accidentally created a closure
// console.log(counter.value);

counter.set(7)
console.log(counter.get());

counter.reset();

// Revealing Module pattern(RMP) is similar to the Module pattern (MP), the difference is that the RMP has functions definitions that associated to the get: and set: properties where MP are associated to functions declaration. Hence in RMP functions associated to get: and set: can easily be deassociated unlike the MP. This becomes a downside to RMP.