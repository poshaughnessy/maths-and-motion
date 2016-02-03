// Let's initialise some variables for the circle
var circlePosition = getCirclePos();
var circleRadius = getCircleRad();

// Now let's build the circle from those variables
var myCircle = new Path.Circle(circlePosition, circleRadius);
myCircle.fillColor = 'white';

var textPosition = getTextPos();
var myText = new PointText(textPosition);
myText.justification = 'center';
myText.fillColor = 'white';
myText.content = getTextContent();






function getCirclePos() {
	// var _circlePos = new Point(100,100);
	var _circlePos = view.center;
	return _circlePos;
}

function getCircleRad() {
	var _radius = 10;
	return _radius;
}

function getTextPos() {
	var _circlePos = getCirclePos();
	var _textPos = new Point(_circlePos.x, _circlePos.y + 25);
	return _textPos;
}

function getTextContent() {
	var _circPos = getCirclePos();
	var _text = _circPos.x + ', ' + _circPos.y;
	return _text;
}

function onResize(event) {
	myCircle.position = getCirclePos();
	myText.position = getTextPos();
	myText.content = getTextContent();
}