var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59']; 
// var colours = ['navy', 'blue', 'skyblue', 'darkblue', 'lightblue']; 


function createTriangle(_x, _y, r) {
		var triangleColor = colours[Math.floor(Math.random()*colours.length)];
		// var triangleColor = new Color.random();//(1, random, 0);
		var Radius = 25;

		var p1 = new Point(_x, _y+Radius);
		var p2 = new Point(_x+Radius, _y-Radius);
		var p3 = new Point(_x-Radius, _y-Radius);

		var segments = [p1, p2, p3, p1];
		var path = new Path(segments);
		path.fillColor = triangleColor;

		path.rotate(r);
}

function createInvTriangle(_x, _y) {
		var triangleColor = colours[Math.floor(Math.random()*colours.length)];
		var Radius = -25;

		var p1 = new Point(_x, _y+Radius);
		var p2 = new Point(_x+Radius, _y-Radius);
		var p3 = new Point(_x-Radius, _y-Radius);

		var segments = [p1, p2, p3, p1];
		var path = new Path(segments);
		path.fillColor = triangleColor;
}


for(var i=0;i<360;i+=15){

	// Convert degrees to radians
    var angle = i * (Math.PI*2) / 360;

    // Get cartesian co-ordinates from that radian value
    var x = view.center.x + Math.cos(angle) * 300;
    var y = view.center.y + Math.sin(angle) * 300;
	
	createTriangle(x, y, i);

}



