    // variable scope = where a variable is accessible

    // let = variables are limited to a block scope {}
    // var = variables are limited to a function(){} but can exist outside a code block {}

    for (let i = 1; i <= 3; i++){
      console.log(i);
    }
      //console.log(i); // i is not accessible

    for (var j = 1; j <= 3; j++){
      console.log(j);
    }
      console.log(j); // j is accessible

    function doSomething(){
      for (var k = 1; k <= 3; k++){
        console.log(k);
      }
    }
    //console.log(k); // k is not accessible
    doSomething();

    // global variable = a variable declared outside a function or an object or array it can be accessed by any function, object or array.
    // when var is used alongside a global variable, it can unintentional change the window's property:

    var name = "Jude";
    // in this case the browser's window object, with the property name has now been changed.