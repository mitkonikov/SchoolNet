var initGraphPoints = []
var graphPoints = [];
var graphPointsCurrent = [];

const Y_AXIS = 1;
const X_AXIS = 2;

var graphSizeX = 0.9;
var graphSizeY = 0.85;
var translateFactor = {
    x : 0.05, 
    y : 0.08
}

var WIDTH = 0;
var HEIGHT = 0;
var WITR = 0;
var HETR = 0;
var prevWIDTH = 0;
var prevHEIGHT = 0;

var pointRadius = 4.5;
var hoveredPoint = -1;
var hoveredRadius = 4.5;
var hoverStarted = 0;
var hoverTriggered = false;
var hoverShow = { x : false, y : true };
var hoverSuffix = { x : "", y: "" };

let robotoLight, robotoThin;

var toDraw = true;

var VIPoints = {
    min : {x : 100000000, y: 100000000},
    max : {x : 0, y : 0}
}

function preload() {
    robotoLight = loadFont('/client/static/res/Roboto-Light.ttf');
    robotoThin = loadFont('/client/static/res/Roboto-Thin.ttf');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    prevWIDTH = WIDTH;
    prevHEIGHT = HEIGHT;

    if (WIDTH >= HEIGHT) {
        graphSizeX = 0.9;
        graphSizeY = 0.85;
    } else {
        graphSizeX = 0.85;
        graphSizeY = 0.9;

        // swap :D
        translateFactor.y += translateFactor.x;
        translateFactor.x = translateFactor.y - translateFactor.x;
        translateFactor.y -= translateFactor.x;
    }

    /*X = 0;
    Y = HEIGHT;
    for (var i = 0; i < 11; ++i) {

        initGraphPoints.push({ 
            x : X,
            y : Y
        });

        X += WIDTH / 10;
        newYdiff = Math.random() * i*35+10;
        if (Y - newYdiff < 0) Y = 0;
        else Y -= Math.random() * i*(HEIGHT/40)+10;
    }*/
    
    //reCalculateGraph();
}

function draw() {
    if (toDraw) {
        drawAll();
        toDraw = false;
    }

    for (pn in graphPoints) {
        let point = graphPoints[pn];

        if (inBox(
            point.x - pointRadius, point.y - pointRadius, 
            pointRadius*2, pointRadius*2,
            mouseX - WIDTH * translateFactor.x, mouseY + HEIGHT * translateFactor.y))
        {
            hoveredPoint = pn;
            hoverTriggered = true;
            hoverStarted = frameCount;
            toDraw = true;
        }
    }

    if (hoverTriggered && Math.abs(frameCount - hoverStarted) == 30) {
        hoverTriggered = false;
        hoveredPoint = -1;
        toDraw = true;
    }
}

function drawAll() {
    clear();

    translate(WIDTH * translateFactor.x, -HEIGHT * translateFactor.y);

    drawCoordAxis();
    drawGrid();

    // if there are points, draw them
    if (graphPoints.length != 0) {
        drawStrokeGraph(graphPoints);

        strokeWeight(0);
        fill(255, 255, 255, 50);
        var graph = createGraphics(WIDTH, HEIGHT);
        drawGraph(graph, graphPoints);

        gradientColor1 = color(255, 255, 255, 50);
        gradientColor2 = color(255, 255, 255, 0);
        var gradient = createGraphics(WIDTH, HEIGHT);
        setGradient(0, 0, WIDTH, HEIGHT, gradientColor1, gradientColor2, Y_AXIS, gradient);

        ( grClone = gradient.get() ).mask( graph.get() );

        image(grClone, 0, 0);
    }

    // drawStatsText();
}

function drawStrokeGraph(graphData) {
    fill(250);
    noStroke();
    for (var i = 0; i < graphData.length; ++i) {
        let tempRadius = pointRadius;
        if (i == hoveredPoint) {
            fill(230);
            pointRadius = hoveredRadius;

            if (hoverShow.x || hoverShow.y) {
                let smallOffset = { x : WIDTH/1080*30, y : WIDTH/1080*30 };
                let textOffset = { x : 0, y : 0 };
                let rectSize = { w: WIDTH/1920*500, h: HEIGHT/1080*200 };

                if (graphData[i].x + smallOffset.x + rectSize.w > WITR) {
                    smallOffset.x = -rectSize.w;
                }

                if (graphData[i].y + smallOffset.y + rectSize.h > HETR) {
                    smallOffset.y = -rectSize.h;
                    textOffset.y = -rectSize.h / 2;
                }

                rect(graphData[i].x + smallOffset.x, graphData[i].y + smallOffset.y, rectSize.w, rectSize.h);

                fill(0);

                let hoverText = "";
                if (hoverShow.x) {
                    hoverText += initGraphPoints[i].x + hoverSuffix.x;
                    if (hoverShow.y) hoverText += ", " + initGraphPoints[i].y + hoverSuffix.y;
                } else {
                    hoverText += initGraphPoints[i].y + hoverSuffix.y;
                }

                textFont(robotoLight);
                textAlign(CENTER, CENTER);
                textSize(HEIGHT / 10.00);
                text(hoverText, graphData[i].x + smallOffset.x + rectSize.w / 2,
                                graphData[i].y + smallOffset.y * 0.5 + rectSize.h / 2 + textOffset.y);
            }

            fill(230);
        }
        
        circle(graphData[i].x, graphData[i].y, pointRadius);
        
        if (i == hoveredPoint) {
            fill(250);
            pointRadius = tempRadius;
        }
    }

    stroke(250);
    strokeWeight(0.8);
    for (var i = 0; i < graphData.length - 1; ++i) {
        line(graphData[i].x, graphData[i].y, graphData[i+1].x, graphData[i+1].y);
    }
}

/**
 * Draw the graph as a shape so later can be filled with a gradient
 * @param {*} obj           The object reference (of a graphic) to draw on
 * @param {*} graphData     The points data array
 */
function drawGraph(obj, graphData) {
    let npoints = graphData.length;

    obj.beginShape();
    obj.vertex(0, HEIGHT);
    for (var i = 0; i < npoints; ++i) {
        obj.vertex(graphData[i].x, graphData[i].y);
    }
    obj.vertex(graphData[npoints - 1].x, HEIGHT);
    obj.endShape();
}

/**
 * Function to draw a gradient using color lerping
 * @param {*} x     x position
 * @param {*} y     y position
 * @param {*} w     width
 * @param {*} h     height
 * @param {*} c1    the first color
 * @param {*} c2    the second color
 * @param {*} axis  what axis
 * @param {*} obj   the graphics to draw the object on
 */
function setGradient(x, y, w, h, c1, c2, axis, obj) {
    obj.noFill();
    obj.strokeWeight(2);

    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        obj.stroke(c);
        obj.line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        obj.stroke(c);
        obj.line(i, y, i, y + h);
      }
    }
}

/** Every time the width or height of the window changes,
 *  we need to recalculate the whole graph
 */
function reCalculateGraph() {
    graphPoints = [];

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    WITR = WIDTH * graphSizeX;
    HETR = HEIGHT * graphSizeY;

    pointRadius = Math.max(WIDTH, HEIGHT)/1280*15;
    hoveredRadius = pointRadius * 1.8;

    // get the boundries
    for (p in initGraphPoints) {
        if (initGraphPoints[p].x > VIPoints.max.x) VIPoints.max.x = initGraphPoints[p].x;
        if (initGraphPoints[p].y > VIPoints.max.y) VIPoints.max.y = initGraphPoints[p].y;
        if (initGraphPoints[p].x < VIPoints.min.x) VIPoints.min.x = initGraphPoints[p].x;
        if (initGraphPoints[p].y < VIPoints.min.y) VIPoints.min.y = initGraphPoints[p].y;
    }

    for (var i = 0; i < initGraphPoints.length; ++i) {
        // proportion with the width and height
        // fiting every point nicely
        let X = initGraphPoints[i].x;

        X -= VIPoints.min.x;
        X *= WITR / prevWIDTH;
        X = X * WITR / VIPoints.max.x;


        let Y = initGraphPoints[i].y;
        
        // Y -= VIPoints.min.y;
        Y *= HETR / prevHEIGHT;
        Y = Y * HETR / (VIPoints.max.y + VIPoints.min.y);
        Y = HETR - Y;

        graphPoints.push({ x : X, y : Y });
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
    reCalculateGraph();
    
    toDraw = true;
}

/** Drawing some static text */
function drawStatsText() {
    fill(255);
    textFont(robotoThin);
    textAlign(CENTER, CENTER);
    textSize(HEIGHT / 20.00);
    text('Real-time Statistics', WIDTH / 2, HEIGHT / 2)
}

/** Drawing the static coordinate axis */
function drawCoordAxis() {
    strokeWeight(HEIGHT/1080*3);
    stroke(250);
    noFill();
    line(0, HEIGHT, WIDTH * graphSizeX, HEIGHT);
    line(0, HEIGHT, 0, HEIGHT * (1-graphSizeY));
}

/** Drwaing the grid for better view */
function drawGrid() {
    strokeWeight(HEIGHT/720);
    noFill();

    let gridLines = {
        x : initGraphPoints.length,
        y : 10 * Math.ceil(Math.log10(VIPoints.max.y - VIPoints.min.y))
    }

    let spacing = {
        x : WIDTH * graphSizeX / gridLines.x,
        y : HEIGHT * graphSizeY / gridLines.y,
    }
    
    let fadingCoefficient = 15;

    for (let x = 1; x <= gridLines.x; ++x) {
        stroke(255, 255, 255, (gridLines.x - x) * fadingCoefficient);
        line(x * spacing.x, HEIGHT, x * spacing.x, HEIGHT * (1-graphSizeY));
    }

    for (let y = 1; y <= gridLines.y; ++y) {
        stroke(255, 255, 255, (gridLines.y - y) * fadingCoefficient);
        line(0, HEIGHT - (y * spacing.y), WIDTH * graphSizeX, HEIGHT- (y * spacing.y));
    }
}

function inBox(X, Y, W, H, x, y) {
    if (x >= X && x <= X + W && y >= Y && y <= Y + H) return true;
    return false;
}

window.onmessage = function(e) {
    let seg = e.data.split(">");
    if (seg[0] == 'data') {
        // seg[1] is the json data
        let data = JSON.parse(seg[1]);
        
        initGraphPoints = [];

        for (p in data) {
            initGraphPoints.push(data[p]);
        }

        reCalculateGraph();
        toDraw = true;
    } else if (seg[0] == 'hover') {
        hoverShow = JSON.parse(seg[1]);
    } else if (seg[0] == 'suffix') {
        hoverSuffix = JSON.parse(seg[1]);
    } else if (seg[0] == 'refresh') {
        reCalculateGraph();
        toDraw = true;
    } else {
        // pop error
        console.trace("not a valid command : " + seg[0]);
    }
}

function insertBeforeDiv(div, element) {
    return new Promise((resolve, reject) => {
        var inNode = div.insertBefore(element);
        while(true) {
            if (typeof inNode !== "undefined") {
                resolve();
                break;
            }
        }
    });
}