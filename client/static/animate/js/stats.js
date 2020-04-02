var initGraphPoints = []
var graphPoints = [];
var graphPointsCurrent = [];

const Y_AXIS = 1;
const X_AXIS = 2;

var WIDTH = 0;
var HEIGHT = 0;
var prevWIDTH = 0;
var prevHEIGHT = 0;

// let robotoLight, robotoThin;

let gotServerData = false;
let cacheServerData;

function preload() {
    // robotoLight = loadFont('/client/static/res/Roboto-Light.ttf');
    // robotoThin = loadFont('/client/static/res/Roboto-Thin.ttf');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    prevWIDTH = WIDTH;
    prevHEIGHT = HEIGHT;

    X = 0;
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
    }
    
    reCalculateGraph();
}

function draw() {
    clear();
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

    drawStatsText();

    noLoop();
}

function drawStrokeGraph(graphData) {
    fill(250);
    stroke(255);
    for (var i = 0; i < graphData.length; ++i) {
        circle(graphData[i].x, graphData[i].y, 4.5);
    }

    stroke(250);
    strokeWeight(0.8);
    for (var i = 0; i < graphData.length - 1; ++i) {
        line(graphData[i].x, graphData[i].y, graphData[i+1].x, graphData[i+1].y);
    }
}

function drawGraph(obj, graphData) {
    obj.beginShape();
    obj.vertex(0, HEIGHT);
    for (var i = 0; i < graphData.length; ++i) {
        obj.vertex(graphData[i].x, graphData[i].y);
    }
    obj.vertex(WIDTH, HEIGHT);
    obj.endShape();
}

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

function reCalculateGraph() {
    graphPoints = [];

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    for (var i = 0; i < 11; ++i) {
        graphPoints.push({ 
            x : initGraphPoints[i].x * WIDTH / prevWIDTH,
            y : initGraphPoints[i].y * HEIGHT / prevHEIGHT
        });
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
    reCalculateGraph();
    loop();
}

function getStatistics() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/client/query',
            type: 'POST',
            data: { 
                command : 'get-main-statistics'
            },
            success: function(response) {
                if (response) {
                    if (response == 'empty') resolve("empty");
                    else resolve(response);
                } else {
                    resolve("problem");
                }
            }
        });
    });
}

function drawStatsText() {
    fill(255);
    textFont("Roboto Thin");
    textAlign(CENTER, CENTER);
    textSize(HEIGHT / 40.00);
    text('Статистики во вистинско време', WIDTH / 2, HEIGHT / 2);

    if (!gotServerData) {
        getStatistics().then((response) => {
            printTextStats(response);

            cacheServerData = response;
            gotServerData = true;
        });
    } else {
        printTextStats(cacheServerData);
    }
}

function printTextStats(response) {
    let MAIN_STATS = "";

    textFont("Roboto Thin");
    textAlign(CENTER, CENTER);
    textSize(HEIGHT / 40.00);

    if (typeof response.Users !== "undefined" && response.Users != "") {
        MAIN_STATS = "Корисници: " + response.Users;
        text(MAIN_STATS, WIDTH / 2, HEIGHT / 5);
    }

    if (typeof response.Contributions_Tatkin !== "undefined" && response.Contributions_Tatkin != "") {
        MAIN_STATS = "Придонеси: " + response.Contributions_Tatkin;
        text(MAIN_STATS, WIDTH / 2, HEIGHT / 5 + HEIGHT / 40.00 * 1.5);
    }

    if (typeof response.Index_Requests !== "undefined" && response.Index_Requests != "") {
        MAIN_STATS = "Посети: " + response.Index_Requests;
        text(MAIN_STATS, WIDTH / 2, HEIGHT / 5 + HEIGHT / 40.00 * 3);
    }
}