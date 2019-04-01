class Point {
    x: number;
    y: number;

    draw() {
        console.log('x: ' + this.x + ' y: ' + this.y);
    };
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();