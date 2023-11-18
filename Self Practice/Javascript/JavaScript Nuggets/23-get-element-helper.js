// Get Element Helper Function
// to help for better debugging if a wrong selector was picked
// it should be better used as a module.

const getElement = (selector, isList) => {
  //check if it's a list or not
  const element = isList ? [...document.querySelectorAll(selector)] : document.querySelector(selector);

  // if element exist and/or the list is not empty
  if ((!isList && element) || (isList && !element.length < 1)) return element;

  // element does not exist
  throw new Error(`Please check selector: ${selector}`);
}

console.log('Element:', getElement('.heading'));
console.log('List:', getElement('.list-item', true));