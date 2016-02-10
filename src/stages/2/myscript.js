// =================================================
// MORE POINTS
// =================================================
// var c = view.center;

// var p1 = new Point(c.x + 100, c.y+100);
// var myCircle = new Path.Circle(p1, 10);
// myCircle.fillColor = 'white';

// var p2 = new Point(c.x - 100, c.y+100);
// var myCircle = new Path.Circle(p2, 10);
// myCircle.fillColor = 'white';

// var p3 = new Point(c.x, c.y-100);
// var myCircle = new Path.Circle(p3, 10);
// myCircle.fillColor = 'white';

// =================================================
// INTRODUCING THE FOR LOOP
// =================================================

// for(var i = 0; i < view.bounds.width; i+= 50){
// 	var p1 = new Point(i, view.center.y);
// 	var myCircle = new Path.Circle(p1, 10);
// 	myCircle.fillColor = 'white';
// }

// =================================================
// NESTING A FOR LOOP
// =================================================

// for(var i = 0; i < view.bounds.width; i+= 50){
// 	for(var j = 0; j < view.bounds.height; j+= 50){
// 		var p1 = new Point(i, j);
// 		var myCircle = new Path.Circle(p1, 10);
// 		myCircle.fillColor = 'white';
// 	}
// }


// =================================================
// BETTER WAY
// =================================================

var c = view.center;
var Radius = 100;

var points = [
	new Point(c.x + Radius, c.y+Radius),
	new Point(c.x - Radius, c.y+Radius),
	new Point(c.x, c.y-Radius)
	];

for(var i =0; i <points.length; i++){
	var myCircle = new Path.Circle(points[i], 10);
	myCircle.fillColor = 'white';
}
