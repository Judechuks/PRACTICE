// ECMAScript 2022

// at() - takes integer and returns the item at that index - for [string, array]
const scores = [96, 99, 90, 100];
const secondScore = scores.at(1);
const lastScore = scores.at(-1); // -1, -2 to get item from the end
console.log("Second score:", secondScore);
console.log("Last score:", lastScore);

// Top Level Await - Basic Example
/*
When using await you don't need to use async if the js file was linked as a module
<script src="main.js" type="module"></script>
Also you have to run the file with a live server or any preview on web server extention
Example: 
const res = await fetch("https://www.course-api.com/react-tabs-project");
  const data = await res.json();
  console.log(data);

Note: when importing it to another file, you have to add the await keyword
import fetchTabs from './fetchTabs.js'; // you have to add the '.js'
const tabs = await fetchTabs();
*/ 