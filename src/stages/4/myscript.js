// =================================================
// LOADS OF TRIANGLES
// =================================================

// function createTriangle(_triangleCenter, _radius){
// 	var c = _triangleCenter;
// 	var Radius = _radius;

// 	var points = [
// 		new Point(c.x + Radius, c.y+Radius),
// 		new Point(c.x - Radius, c.y+Radius),
// 		new Point(c.x, c.y-Radius)
// 		];

// 	var path = new Path(points);
// 	var triangleColor = Color.random();
// 		path.fillColor = triangleColor;
// }

// var triDistance = 50;

// for(var i = 0; i < view.size.width; i+= triDistance) {
// 	for(var j = 0; j < view.size.height; j+= triDistance) {
// 		var triangleCenter = new Point(i,j);
// 		createTriangle(triangleCenter, 25);
// 	}
// }

// =================================================
// CIRCLE OF TRIANGLES
// =================================================

// function createTriangle(_triangleCenter, _radius){
// 	var c = _triangleCenter;
// 	var Radius = _radius;

// 	var points = [
// 		new Point(c.x + Radius, c.y+Radius),
// 		new Point(c.x - Radius, c.y+Radius),
// 		new Point(c.x, c.y-Radius)
// 		];

// 	var path = new Path(points);
// 	var triangleColor = Color.random();
// 		path.fillColor = triangleColor;
// }

// for(var i=0;i<360;i+=15){
// 	// Convert degrees to radians
//     var angle = i * (Math.PI*2) / 360;
//     // Get cartesian co-ordinates from that radian value
//     var x = view.center.x + Math.cos(angle) * 300;
//     var y = view.center.y + Math.sin(angle) * 300;
	
// 	var triangleCenter = new Point(x,y);
// 		createTriangle(triangleCenter, 25);

// }

// =================================================
// NICER TRIANGLES
// =================================================

var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59']; 
// var colours = ['navy', 'blue', 'skyblue', 'darkblue', 'lightblue']; 

function createTriangle(_triangleCenter, _radius){
	var c = _triangleCenter;
	var Radius = _radius;

	var points = [
		new Point(c.x + Radius, c.y+Radius),
		new Point(c.x - Radius, c.y+Radius),
		new Point(c.x, c.y-Radius)
		];

	var path = new Path(points);
	var triangleColor = colours[Math.floor(Math.random()*colours.length)];
	// var triangleColor = Color.random();
		path.fillColor = triangleColor;
}

var triDistance = 50;

for(var i = 0; i < view.size.width; i+= triDistance) {
	for(var j = 0; j < view.size.height; j+= triDistance) {

	 	var Radius = triDistance/2;
		var triangleCenter = new Point(i,j);
		createTriangle(triangleCenter, Radius);

		var nextTriangleCenter = new Point(i+Radius,j);
		createTriangle(nextTriangleCenter, -Radius);
	}
}

