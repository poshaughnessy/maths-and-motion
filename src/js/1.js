var connectSeg = [];

function initialRender() {
	var margin = 50;
	var startxPos = margin;
	var endxPos = view.size.width - margin;
	var fullx = endxPos - startxPos;
	var xInc = fullx / 20;

	var startyPos = margin;
	var endyPos = view.size.height - margin;
	var fully = endyPos - startyPos;
	var yInc = fully / 20;


	for (var i = startxPos; i <= endxPos; i+=xInc) {
		for (var j = startyPos; j < endyPos; j+=yInc) {
        	var position = new Point(i, j);
        	var path = new Path(position, position + 10);
        	var icolor = i / view.size.width;
        	var jcolor = j / view.size.width;

        	var pathColor = new Color(jcolor, 0.2, icolor);
			path.style = {
				strokeColor: pathColor,
				strokeWidth: 5,
				strokeCap: 'round'
			};
			connectSeg.push(path);

        }
    }
}

initialRender();

function moveLine(thisPos, targetPos) {
	
		var P1 = thisPos;
		var P2 = targetPos;
		var d1 = P2 - P1;
		var direction = d1.normalize();

		var P3 = P1 + (direction * (d1 * 0.05));

    	return P3;
}

function onResize(event) {

}


function onFrame(event) {

}

function onMouseMove(event) {
	
	for(i = 0; i < connectSeg.length; i++){
		var position = moveLine(connectSeg[i].segments[0].point, event.point);
		connectSeg[i].segments[1].point = position;
	}
}