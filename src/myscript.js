// =================================================
// SHORT WAY
// =================================================

var myCircle = new Path.Circle(view.center, 20);
myCircle.fillColor = 'white';


// =================================================
// LONG WAY
// =================================================

// // Let's initialise some variables for the circle
// var circleRadius = 10;
// var circlePosition = new Point(100,100);
// var circlePosition = view.center;

// // Now let's build the circle from those variables
// var myCircle = new Path.Circle(circlePosition, circleRadius);
// myCircle.fillColor = 'white';
// listCoords(circlePosition);


// // Now let's write a quick function to display the co-ordinates
// // Takes a point
// function listCoords(_point) {
// 	listCoords2(_point.x, _point.y);
// }

// // Takes 2 points
// function listCoords2(_xPos, _yPos) {
// 	var textPosition = new Point(_xPos , _yPos + 30)

// 	var text = new PointText(textPosition);
// 	text.justification = 'center';
// 	text.fillColor = 'white';
// 	// Let's display the co-ordinates of the 
// 	text.content = _xPos + ', ' + _yPos;
// }
