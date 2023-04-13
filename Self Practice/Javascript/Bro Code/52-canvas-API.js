// Canvas API = a means for drawing graphics on the webpage
//              used for animation, games, data visualization

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");


/*
// DRAW LINES
context.lineWidth = 10; // thickness of the line
context.strokeStyle = "purple"; // color of the line

context.beginPath(); // start
context.moveTo(0, 0); // top left corner
context.lineTo(250, 250); // center
context.lineTo(250, 500); // center to down
context.moveTo(500, 0); // top right corner
context.lineTo(250, 250); // to center
context.stroke(); // line appearance
*/

/*
context.fillStyle = "orange"; // background color
context.lineWidth = 10; // thickness of the line
context.strokeStyle = "purple"; // color of the line

// DRAW TRIANGLE
context.beginPath(); // start
context.moveTo(250, 0); // top center
context.lineTo(0, 250); // left center
context.lineTo(500, 250); // right center
context.lineTo(250, 0); // top center
context.stroke(); // line appearance
context.fill(); // background
*/

/*
// DRAW RECTANGLE
context.fillStyle = "orange"; // background color

context.strokeRect(0, 0, 250, 250); // (x, y, width, height) uncolored rectangle
context.fillRect(0, 0, 250, 250); // colored rectangle

context.fillStyle = "blue"; // background color
context.fillRect(250, 250, 250, 250); // colored rectangle
*/

/*
// DRAW CIRCLE
// (x, y, r, startAngle(in radian), endAngle(in radian), counterClockWise)

context.fillStyle = "orange"; // background color

context.beginPath();
context.arc(250, 250, 150, 0, 2 * Math.PI);  // circle
// context.arc(250, 250, 150, 1, 2 * Math.PI);  // arc
// context.arc(250, 250, 150, 1.5, 2 * Math.PI, true);  // reversed arc
context.stroke();
context.fill();
*/

// /* 
// DRAW TEXT
context.font = "50px MV Boli";
context.fillStyle = "blue";
context.textAlign = "center"; // center horizontally

// context.fillText("YOU WIN!", 100, 100);  // ("YOUR TEXT", X, Y)
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);  // to center vertically and horizontally
// */