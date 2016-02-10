

	// var rightpupil = new Path.Circle(eyeCentre, 30);
	// rightpupil.fillColor = 'black';

var leftpplPos = new Point(view.center);
var rightpplPos = new Point(view.center);

function createCircle(_segment) {

	var _p = _segment.point;
	var _hin = _p + _segment.handleIn;
	var _hout = _p + _segment.handleOut;

	var myCircle = new Path.Circle(new Point(_p), 5);
	myCircle.fillColor = 'white';

	var myCircle = new Path.Circle(new Point(_hin), 5);
	myCircle.strokeColor = 'red';
	var myCircle = new Path.Circle(new Point(_hout), 5);
	myCircle.strokeColor = 'green';

}

function createEye(_x, _y, _pplpos) {
	eyeCentre = new Point(_x, _y);
	var myCircle = new Path.Circle(eyeCentre, 60);
	myCircle.fillColor = 'white';

	return eyeCentre;	
}

function movePupil(_p1, _p2) {

	// var _p3 = 

    var d1 = _p2 - _p1;
    var direction = d1.normalize();
    var _p3 = _p1 + (direction * 15);
	return _p3;
}

function createHeart(_x, _y) {
		var triangleColor = 'red';//colours[Math.floor(Math.random()*colours.length)];
		// var triangleColor = new Color.random();//(1, random, 0);
		var Radius = 100;

		var p1 = new Point(_x, _y+Radius);
		var p1hin = new Point(Radius*0.3, 0);
		var p1hout = new Point(-Radius*0.3, 0);
		var s1 = new Segment(p1, p1hin, p1hout);


		var p2 = new Point(_x, _y-Radius);
		var p2hin = new Point(0, -(Radius*1.3));
		var p2hout = new Point(0, -(Radius*1.3));
		var s2 = new Segment(p2, p2hin, p2hout);


		var p3 = new Point(_x-(Radius*2), _y-Radius);
		var p3hin = new Point(0, Radius);
		var p3hout = new Point(0, -(Radius*1.3));
		var s3 = new Segment(p3, p3hin, p3hout);


		var p4 = new Point(_x+(Radius*2), _y-Radius);
		var p4hin = new Point(0, -(Radius*1.3));
		var p4hout = new Point(0, Radius);
		var s4 = new Segment(p4, p4hin, p4hout);


		var segments = [s1, s3, s2, s4, s1];
		var path = new Path(segments);
		path.fillColor = triangleColor;

		// createCircle(s1);
		// createCircle(s2);
		// createCircle(s3);
		// createCircle(s4);

		rightpplPos = createEye(_x + Radius, _y -Radius, rightpplPos);
		leftpplPos = createEye(_x - Radius, _y -Radius, leftpplPos);
}

createHeart(view.center.x, view.center.y);

var leftpupil = new Path.Circle(new Point(100,100), 30);
leftpupil.fillColor = 'black';

var rightpupil = new Path.Circle(new Point(100,100), 30);
rightpupil.fillColor = 'black';

function onMouseMove(event) {
	// Add a segment to the path at the position of the mouse:
	console.log(event);
	leftpupil.position = movePupil(leftpplPos, event.point);
	rightpupil.position = movePupil(rightpplPos, event.point);
}



// console.log(project)

// for(var i = 0; i < path.segments.length; i++){
// 	console.log(path.segments[i]);
// }
