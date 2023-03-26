// toLocalString() = returns a string with a language sensitive representation of this number
// number.toLocalString(locale, {options});

// 'locale' = specify that language (undefined = browser's default set)
// 'options' = object with formatting options

let myNum = 123456.789,
    enNum, inNum, deNum, 
    dollar, rupee, euro,
    num = .8, percent,
    degree = 80, temp;

// As standard Formatting
enNum = myNum.toLocaleString("en-US");  // US English
console.log('US English:', enNum);
inNum = myNum.toLocaleString("hi-IN");  // India Hindi
console.log('India Hindi:', inNum);
deNum = myNum.toLocaleString("de-DE");  // Standard German
console.log('Standard German:', deNum);

// As Currency Formatting
dollar = myNum.toLocaleString("en-US", {style: "currency", currency: "USD" });
console.log('US Dollar:', dollar);  // value will be in Dollars and cent will be rounded to the nearest cent
rupee = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR" });
console.log('Indian Rupee:', rupee);  // value will be in Rupee
euro = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR" });
console.log('German Euro:', euro);  // value will be in Euro

// As Percent Formatting
percent = num.toLocaleString(undefined, {style: "percent"});
console.log(num, 'to Percent is:', percent);  // value will be in Percent

// As Unit Formatting
temp = degree.toLocaleString(undefined, {style: "unit", unit: "celsius"});
// unit: kilogram, meter, inch, etc
console.log('Temperature is:', temp);  // value will be in degree celsius
