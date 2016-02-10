var frogs = {};

function drawFrog(center, size) {

    var p0 = new Point(center.x, center.y + size/4);
    var circle0 = new Path.Circle(p0, size);
    circle0.fillColor = 'green';

    var p1 = new Point(center.x + size/2, center.y - size/2);
    var circle1 = new Path.Circle(p1, size/4);
    circle1.fillColor = 'white';

    var p2 = new Point(center.x - size/2, center.y - size/2);
    var circle2 = new Path.Circle(p2, size/4);
    circle2.fillColor = 'white';

    var p3 = new Point(center.x + size/2, center.y - size/2);
    var circle3 = new Path.Circle(p3, size/10);
    circle3.fillColor = 'black';

    var p4 = new Point(center.x - size/2, center.y - size/2);
    var circle4 = new Path.Circle(p4, size/10);
    circle4.fillColor = 'black';

    var rectangle1 = new Rectangle(new Point(center.x - size, center.y + size*1.1), new Size(size, size/2));
    var ellipse1 = new Path.Ellipse(rectangle1);
    ellipse1.fillColor = 'darkgreen';

    var rectangle2 = new Rectangle(new Point(center.x + size*0.1, center.y + size*1.1), new Size(size, size/2));
    var ellipse2 = new Path.Ellipse(rectangle2);
    ellipse2.fillColor = 'darkgreen';

    var path1 = new Path();
    path1.strokeColor = 'darkred';
    path1.add(new Point(center.x - size/4, center.y));
    path1.add(new Point(center.x, center.y + size/5));
    path1.add(new Point(center.x + size/4, center.y));
    path1.add(new Point(center.x, center.y));

    path1.closed = true;
    path1.fillColor = 'darkred';
    path1.smooth();

    //frogs[center.x+''+center.y] = new Group([p0, p1, p2, p3, p4, rectangle1, rectangle2, ellipse1, ellipse2, path1]);

}

for (var i=0; i < view.bounds.width; i += 200) {
    for (var j=0; j < view.bounds.height; j+= 200) {
        //frogs[i+''+j] = drawFrog( new Point(i, j), 80 );
        drawFrog( new Point(i, j), 80 );
    }
}

/*
function onFrame(event) {
    // Each frame, rotate the path by 3 degrees:
    for (var i=0; i < view.bounds.width; i += 200) {
        for (var j = 0; j < view.bounds.height; j += 200) {
            frogs[i + '' + j].rotate(3);
        }
    }
}
*/
