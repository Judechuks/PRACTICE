// falsy
if (false)        {} else { console.log('False is falsy'); }
if (null)         {} else { console.log('Null is falsy'); }
if (undefined)    {} else { console.log('Undefined is falsy'); }
if (0)            {} else { console.log('0 is falsy'); }
if (NaN)          {} else { console.log('NaN is falsy'); }
if ('')           {} else { console.log('An empty string with single-quotes is falsy'); }
if ("")           {} else { console.log('An empty string with double-quotes is falsy'); }

// Every other thing is truthy
if (true)         { console.log('True is truthy'); }
if ({})           { console.log('An empty object is truthy'); }
if ([])           { console.log('An empty array is truthy'); }

if ("Jude")       { console.log('A non empty string is truthy'); }
if (new RegExp()) { console.log('A new instance of an object is truthy'); }

if (10)           { console.log('Positive integers are truthy'); }
if (-10)          { console.log('Negative integers are truthy'); }
if (1.23)         { console.log('Positive floats are truthy'); }
if (-1.23)        { console.log('Negative integers are truthy'); }
if (Infinity)     { console.log('Positive infinities are truthy'); }
if (-Infinity)    { console.log('Negative infinities are truthy'); }