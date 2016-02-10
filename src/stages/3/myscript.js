// =================================================
// MAKING A FILLED TRIANGLE
// =================================================

var c = view.center;
var Radius = 50;

var points = [
	new Point(c.x + Radius, c.y+Radius),
	new Point(c.x - Radius, c.y+Radius),
	new Point(c.x, c.y-Radius)
	];

var path = new Path(points);
	path.fillColor = 'white';

// =================================================
// MAKING A TRIANGLE FUNCTION
// =================================================

// function createTriangle(_triangleCenter){
// 	var c = _triangleCenter;
// 	var Radius = 50;

// 	var points = [
// 		new Point(c.x + Radius, c.y+Radius),
// 		new Point(c.x - Radius, c.y+Radius),
// 		new Point(c.x, c.y-Radius)
// 		];

// 	var path = new Path(points);
// 		path.fillColor = 'white';
// }

// createTriangle(view.center);

// function onMouseMove(event) {
// 	createTriangle(event.point);
// }

// =================================================
// ADDING RANDOM SEEDS
// =================================================

// function createTriangle(_triangleCenter){
// 	var c = _triangleCenter;
// 	// Let's add a random radius
// 	var Radius = Math.random() * 50;

// 	var points = [
// 		new Point(c.x + Radius, c.y+Radius),
// 		new Point(c.x - Radius, c.y+Radius),
// 		new Point(c.x, c.y-Radius)
// 		];

// 	var path = new Path(points);
// 		// Let's add a random color
// 		path.fillColor = Color.random();
// }

// createTriangle(view.center);