function listCoords(_point) {
	listCoords2(_point.x, _point.y);
}

function listCoords2(_xPos, _yPos) {
	var textPosition = new Point(_xPos , _yPos + 30)

	var text = new PointText(textPosition);
	text.justification = 'center';
	text.fillColor = 'white';
	// Let's display the co-ordinates of the 
	text.content = _xPos + ', ' + _yPos;
}
