var WIDTH = 0;
var HEIGHT = 0;
var prevWIDTH = 0;
var prevHEIGHT = 0;
var SIZE = 0;

let STROKE = 50;

let circle = [];
let square = [];
let triangle = [];

let circle_pos;
let square_pos;
let triangle_pos;

let triPOINTS = [];
let squPOINTS = [];

let POSITIONS = [];
let BOUNDERY_BOXES = [];

// Temporary shape for the morphism
let morph = [];

// Possible states
let STATE_TRI = 0;
let STATE_RECT = 1;
let STATE_CIRCLE = 2;
let STATES = [STATE_TRI, STATE_RECT, STATE_CIRCLE];
let PAGES = ['NEWS', 'PLAY', 'PROFILE'];

// Variable for keeping track what's the current shape
let state = STATE_RECT;

// let strokeDynamics = Math.PI/4;

let RESIZED = false;

function preload() {
    robotoLight = loadFont('/client/static/res/Roboto-Light.ttf');
    robotoThin = loadFont('/client/static/res/Roboto-Thin.ttf');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    reCalculateShapes();

    // frameRate(10);
}

function draw() { 
    clear();

    // We will keep how far the vertices are from their target
    let totalDistance = 0;
  
    // Look at each vertex
    for (let i = 0; i < circle.length; i++) {
        let v1;

        // Are we lerping to the circle, the square or to the triangle?
        if (state == STATE_TRI) {
            v1 = triangle[i];
        } else if (state == STATE_RECT) {
            v1 = square[i];
        } else if (state == STATE_CIRCLE) {
            v1 = circle[i];
        }

        // Get the vertex we will draw
        let v2 = morph[i];

        // Lerp to the target
        v2.lerp(v1, 0.2);
        // Check how far we are from target
        totalDistance += p5.Vector.dist(v1, v2);
    }
  
    // printPointNumbers();
    drawPageText();

    noFill();
    stroke('rgba(100%,100%,100%,0.2)');
    strokeWeight(STROKE * 0.8);

    // Draw the transparent triangle
    drawShapeList(triPOINTS);

    // Draw the transparent square
    drawShapeList(square);

    // Draw the transparent circle
    drawShapeList(circle);

    // Draw the morph shape
    strokeWeight(STROKE);
    // strokeDynamics -= 0.1;
    
    stroke(255);
    
    // If all the vertices are close, switch shape
    if (totalDistance < 20) {
        stroke(255);
        strokeWeight(STROKE);

        if (state == STATE_TRI) {
            drawShapeList(triPOINTS);
        } else if (state == STATE_RECT) {
            drawShapeList(squPOINTS);
        } else if (state == STATE_CIRCLE) {
            drawShapeList(circle);
        }

        noLoop();
        return;
    } else {

        strokeWeight(STROKE*(1-
            Math.sin(totalDistance*(3.1415/2) /
            WIDTH/2
        )/2 ));

        // Draw a polygon that makes up all the vertices
        drawShapeList(morph);
    }

    /*BOUNDERY_BOXES.forEach(box => {
        fill(255, 0, 0);
        noStroke();
        rect(box[0].x, box[0].y, box[1].x, box[1].y);
    });*/
}

function drawShapeList(list) {
    beginShape();
    list.forEach(v => {
        vertex(v.x, v.y);
    });
    endShape(CLOSE);
}

function drawPageText() {
    fill(255);
    strokeWeight(0.5);
    textFont(robotoThin);
    textAlign(CENTER, CENTER);
    textSize(HEIGHT / 8.00);
    text(PAGES[state], WIDTH / 2, HEIGHT - HEIGHT / 10);
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
}

function reCalculateShapes() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    prevWIDTH = WIDTH;
    prevHEIGHT = HEIGHT;

    SIZE = WIDTH / 20.0 * 1.1;
    SIZE_VEC = createVector(SIZE, SIZE);
    STROKE = SIZE / 200 * 60;

    square_pos = createVector(WIDTH / 2, HEIGHT / 2);
    circle_pos = createVector(square_pos.x + WIDTH / 8 * 1.6, HEIGHT / 2);
    triangle_pos = createVector(square_pos.x - WIDTH / 8 * 1.7, HEIGHT / 2);

    POSITIONS = [triangle_pos, square_pos, circle_pos];

    MARGIN_ERROR_VEC = createVector(5, 5);
    for (var i = 0; i < POSITIONS.length; ++i) {
        pos = POSITIONS[i];

        var elemPosition = pos.copy();
        elemPosition.add(SIZE_VEC.copy().mult(-1));
        elemPosition.add(MARGIN_ERROR_VEC.copy().mult(-1));
        var elemSize = SIZE_VEC.copy();
        elemSize.add(MARGIN_ERROR_VEC);
        elemSize.mult(2);
        BOUNDERY_BOXES.push([elemPosition, elemSize, STATES[i]]);
    }

    circle = [];
    square = [];
    triangle = [];

    POINTS_MULT = 2;

    // Create a circle using vectors pointing from center
    for (let angle = 0; angle < 360; angle += 20) {
        // Note we are not starting from 0 in order to match the
        // path of a circle.
        let v = p5.Vector.fromAngle(radians(190 - angle));
        v.mult(SIZE);
        v.add(circle_pos);
        v.add(createVector(0, -1));
        circle.push(v);
        // Let's fill out morph ArrayList with blank PVectors while we are at it
        morph.push(square_pos.copy());
    }

    // A square is a bunch of vertices along straight lines
    
    squPOINTS.push(createVector(-1, 1));
    squPOINTS.push(createVector(1, 1));
    squPOINTS.push(createVector(1, -1));
    squPOINTS.push(createVector(-1, -1));

    squPOINTS.forEach((point) => {
        point.mult(SIZE * 1.15);
        point.add(square_pos);
    });

    DrawingShape(squPOINTS, square, SIZE*20/100*POINTS_MULT * 1.4);

    triAngleOffset = 30;
    triPOINTS.push(p5.Vector.fromAngle(radians(120 + triAngleOffset)));
    triPOINTS.push(p5.Vector.fromAngle(radians(0 + triAngleOffset)));
    triPOINTS.push(p5.Vector.fromAngle(radians(240 + triAngleOffset)));

    triPOINTS.forEach((point) => {
        point.mult(SIZE * 1.2);
        point.add(triangle_pos);
        point.add(createVector(0, 3));
    });

    let tempTriangle = [];
    DrawingShape(triPOINTS, tempTriangle, SIZE*20/100*POINTS_MULT * 1.4);

    let counter = 0;
    for (var i = 0; i < tempTriangle.length; ++i) {
        if ((i % 2 == 0 || i % 3 == 0) && i != 0) {
            if (counter < 9) {
                triangle.push(tempTriangle[i-1]);
                counter++;
            }
        }
        
        triangle.push(tempTriangle[i]);
    }

    console.log(counter);
    console.log(triangle.length);
    console.log(square.length);
    console.log(circle.length); 
}

function printPointNumbers() {
    fill(200, 20, 20);
    // triPOINTS.forEach(point => { rect(point.x, point.y, 20, 20); });
    for (var i = 0; i < squPOINTS.length; ++i) {
        fill(150, 20, 20);
        textFont(robotoThin);
        textAlign(CENTER, CENTER);
        textSize(HEIGHT / 10.00);
        text(i, squPOINTS[i].x, squPOINTS[i].y);
    }
    for (var i = 0; i < triPOINTS.length; ++i) {
        fill(150, 20, 20);
        textFont(robotoThin);
        textAlign(CENTER, CENTER);
        textSize(HEIGHT / 10.00);
        text(i, triPOINTS[i].x, triPOINTS[i].y);
    }
    noFill();
}

function DrawingShape(line_arr, point_arr, increment) {
    for (let p = 0; p < line_arr.length; ++p) {
        let POINT_1, POINT_2;
        if (p == line_arr.length - 1) {
            // this wraps around
            POINT_1 = line_arr[p];
            POINT_2 = line_arr[0];
        } else {
            POINT_1 = line_arr[p]
            POINT_2 = line_arr[p+1];
        }

        LINE = DrawingLine(POINT_1.x, POINT_1.y, POINT_2.x, POINT_2.y, increment=increment);
        LINE.forEach((point) => {
            point_arr.push(point);
        });
    }
}

function DrawingLine(x, y, x2, y2, increment=20)
{
    POINTS = [];
    var w = x2 - x;
    var h = y2 - y;
    var dx1 = 0, dy1 = 0, dx2 = 0, dy2 = 0;
    if (w < 0) dx1 = -1; else if (w > 0) dx1 = 1;
    if (h < 0) dy1 = -1; else if (h > 0) dy1 = 1;
    if (w < 0) dx2 = -1; else if (w > 0) dx2 = 1;
    var longest = Math.abs(w);
    var shortest = Math.abs(h);
    if (!(longest > shortest))
    {
        longest = Math.abs(h);
        shortest = Math.abs(w);
        if (h < 0) dy2 = -1; else if (h > 0) dy2 = 1;
        dx2 = 0;
    }
    var numerator = longest / 2;
    for (var i = 0; i < longest; i += increment)
    {
        POINTS.push(createVector(x, y));
        numerator += shortest;
        if (!(numerator < longest))
        {
            numerator -= longest;
            x += dx1;
            y += dy1;
        }
        else
        {
            x += dx2;
            y += dy2;
        }
    }

    return POINTS;
}

function inBox(x, y, X, Y, W, H) {
    if (x >= X && y >= Y && x <= X + W && y <= Y + H) return true;
    return false;
}

/* EVENT HANDLERS */
function mousePressed() {
    BOUNDERY_BOXES.forEach(box => {
        if (inBox(mouseX, mouseY, box[0].x, box[0].y, box[1].x, box[1].y)) {
            prev_state = state;
            state = box[2];
            window.top.postMessage('state-' + prev_state + '-' + state, '*');
            loop();
        }
    });
}