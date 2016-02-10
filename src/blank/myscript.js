var frogs = [];

function drawFrog(center, size) {

    // Main green circle
    var p0 = new Point(center.x, center.y + size/4);
    var circle0 = new Path.Circle(p0, size);
    circle0.fillColor = 'green';

    // Eye white 1
    var p1 = new Point(center.x + size/2, center.y - size/2);
    var circle1 = new Path.Circle(p1, size/4);
    circle1.fillColor = 'white';

    // Eye white 2
    var p2 = new Point(center.x - size/2, center.y - size/2);
    var circle2 = new Path.Circle(p2, size/4);
    circle2.fillColor = 'white';

    // Eye pupil 1
    var p3 = new Point(center.x + size/2, center.y - size/2);
    var circle3 = new Path.Circle(p3, size/10);
    circle3.fillColor = 'black';

    // Eye pupil 2
    var p4 = new Point(center.x - size/2, center.y - size/2);
    var circle4 = new Path.Circle(p4, size/10);
    circle4.fillColor = 'black';

    // Leg 1
    var rectangle1 = new Rectangle(new Point(center.x - size, center.y + size*1.1), new Size(size, size/2));
    var ellipse1 = new Path.Ellipse(rectangle1);
    ellipse1.fillColor = 'darkgreen';

    // Leg 2
    var rectangle2 = new Rectangle(new Point(center.x + size*0.1, center.y + size*1.1), new Size(size, size/2));
    var ellipse2 = new Path.Ellipse(rectangle2);
    ellipse2.fillColor = 'darkgreen';

    // Mouth
    var path1 = new Path();
    path1.strokeColor = 'darkred';
    path1.add(new Point(center.x - size/4, center.y));
    path1.add(new Point(center.x, center.y + size/5));
    path1.add(new Point(center.x + size/4, center.y));
    path1.add(new Point(center.x, center.y));
    path1.closed = true;
    path1.fillColor = 'darkred';
    path1.smooth();

    var group = new Group([circle0, circle1, circle2, circle3, circle4, ellipse1, ellipse2, path1]);

    frogs.push( group );

}

for (var i=0; i < view.bounds.width; i += 200) {
    for (var j=0; j < view.bounds.height; j+= 200) {
        drawFrog( new Point(i+80, j), 80 );
    }
}

function randomPosOrNeg(size) {
    return Math.random() > 0.5 ? size : -size;
}

function onFrame(event) {
    for (var i=0; i < frogs.length; i++) {

        var frog = frogs[i];

        frog.rotate(Math.random() * 5);

        var children = frog.getChildren();

        // Eyes

        var eye1 = children[3];
        var eye2 = children[4];


        eye1.position += new Point(Math.random() * randomPosOrNeg(0.8), Math.random() * randomPosOrNeg(0.8));
        eye2.position += new Point(Math.random() * randomPosOrNeg(0.8), Math.random() * randomPosOrNeg(0.8));

        // Legs

        var leg1 = children[5];
        var leg2 = children[6];

        leg1.rotate(Math.random() * randomPosOrNeg(5));
        leg2.rotate(Math.random() * randomPosOrNeg(5));

    }
}
