/**
 * Created by Administrator on 2015/1/27.
 */
var w_width = 1024;
var w_height = 768;
var w_radius = 3;
var mg_top = 60;
var mg_left = 30;

var endTime = new Date(2015, 1, 18, 0, 0, 0);
var curSeconds = 0;

var balls = [];
var colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"];

window.onload = function () {

    w_width = document.body.clientWidth;
    w_height = document.body.clientHeight;

    mg_left = Math.round(w_width/10);
    w_radius = Math.round(w_width *4 / 5 / 165) - 1;
    mg_top = Math.round(w_height / 5);

    var canvas = document.getElementById("cvs");
    var context = canvas.getContext("2d");

    canvas.width = w_width;
    canvas.height = w_height;

    curSeconds = getcurSeconds();
    //render(context);

    setInterval(
        function () {
            render(context);
            update();
        },
        50
    );
};

function getcurSeconds() {
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret / 1000);

    return ret >= 0 ? ret : 0;
}

function update() {

    var next_ShowTime = getcurSeconds();

    var next_Day = parseInt(next_ShowTime / (3600 * 24));
    var next_Lv1 = next_ShowTime % (24 * 3600);
    var next_Hours = parseInt(next_Lv1 / 3600);
    var next_Lv2 = next_Lv1 % 3600;
    var next_Minutes = parseInt(next_Lv2 / 60);
    var next_Lv3 = next_Lv2 % 60;
    var next_Seconds = parseInt(next_Lv3);

    var cur_Day = parseInt(curSeconds / (3600 * 24));
    var cur_Lv1 = curSeconds % (24 * 3600);
    var cur_Hours = parseInt(cur_Lv1 / 3600);
    var cur_Lv2 = cur_Lv1 % 3600;
    var cur_Minutes = parseInt(cur_Lv2 / 60);
    var cur_Lv3 = cur_Lv2 % 60;
    var cur_Seconds = parseInt(cur_Lv3);


    if (next_Seconds !== cur_Seconds) {

        if (parseInt(cur_Day / 10) !== parseInt(next_Day / 10)) {
            addBalls(mg_left, mg_top, parseInt(cur_Day / 10));
        }
        if (parseInt(cur_Day % 10) !== parseInt(next_Day % 10)) {
            addBalls(mg_left + 15 * (w_radius + 1), mg_top, parseInt(cur_Day % 10));
        }

        if (parseInt(cur_Hours / 10) !== parseInt(next_Hours / 10)) {
            addBalls(mg_left + 45 * (w_radius + 1), mg_top, parseInt(cur_Hours / 10));
        }
        if (parseInt(cur_Hours % 10) !== parseInt(next_Hours % 10)) {
            addBalls(mg_left + 60 * (w_radius + 1), mg_top, parseInt(cur_Hours % 10));
        }

        if (parseInt(cur_Minutes / 10) !== parseInt(next_Minutes / 10)) {
            addBalls(mg_left + 90 * (w_radius + 1), mg_top, parseInt(cur_Minutes / 10));
        }
        if (parseInt(cur_Minutes % 10) !== parseInt(next_Minutes % 10)) {
            addBalls(mg_left + 105 * (w_radius + 1), mg_top, parseInt(cur_Minutes % 10));
        }

        if (parseInt(cur_Seconds / 10) !== parseInt(next_Seconds / 10)) {
            addBalls(mg_left + 135 * (w_radius + 1), mg_top, parseInt(cur_Seconds / 10));
        }
        if (parseInt(cur_Seconds % 10) !== parseInt(next_Seconds % 10)) {
            addBalls(mg_left + 150 * (w_radius + 1), mg_top, parseInt(cur_Seconds % 10));

        }

        curSeconds = next_ShowTime;
    }

    updateBalls();
    console.log(balls.length);
}

function updateBalls() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if (balls[i].y >= w_height - w_radius) {
            balls[i].y = w_height - w_radius;
            balls[i].vy = -balls[i].vy * 0.60;
        }
    }

    var cnt = 0;
    for(var i = 0; i < balls.length; i++){
        if( (balls[i].x + w_radius) > 0 && (balls[i].x - w_radius) < w_width){
            balls[cnt++] = balls[i];
        }
    }
    while(balls.length > Math.min(300,cnt)){
        balls.pop();
    }
}

function addBalls( x, y, num ) {
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] === 1) {
                var aBall = {
                    x: x + j * 2 * (w_radius + 1) + (w_radius + 1),
                    y: y + i * 2 * (w_radius + 1) + (w_radius + 1),
                    g: 1.5 + Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                    vy: -5,
                    color: colors[Math.floor(Math.random() * colors.length)]
                };
                balls.push(aBall);
            }
        }
    }
}

function render(cxt) {

    cxt.clearRect(0, 0, w_width, w_height); //刷新

    var day = parseInt(curSeconds / (3600 * 24));
    var lv1 = curSeconds % (24 * 3600);
    var hours = parseInt(lv1 / 3600);
    var lv2 = lv1 % 3600;
    var minutes = parseInt(lv2 / 60);
    var lv3 = lv2 % 60;
    var seconds = parseInt(lv3);

    renderDigit(mg_left, mg_top, parseInt(day / 10), cxt);
    renderDigit(mg_left + 15 * (w_radius + 1), mg_top, parseInt(day % 10), cxt);
    renderDigit(mg_left + 30 * (w_radius + 1), mg_top, 10, cxt);
    renderDigit(mg_left + 45 * (w_radius + 1), mg_top, parseInt(hours / 10), cxt);
    renderDigit(mg_left + 60 * (w_radius + 1), mg_top, parseInt(hours % 10), cxt);
    renderDigit(mg_left + 75 * (w_radius + 1), mg_top, 10, cxt);
    renderDigit(mg_left + 90 * (w_radius + 1), mg_top, parseInt(minutes / 10), cxt);
    renderDigit(mg_left + 105 * (w_radius + 1), mg_top, parseInt(minutes % 10), cxt);
    renderDigit(mg_left + 120 * (w_radius + 1), mg_top, 10, cxt);
    renderDigit(mg_left + 135 * (w_radius + 1), mg_top, parseInt(seconds / 10), cxt);
    renderDigit(mg_left + 150 * (w_radius + 1), mg_top, parseInt(seconds % 10), cxt);

    for (var i = 0; i < balls.length; i++) {

        cxt.fillStyle = balls[i].color;

        cxt.beginPath();
        cxt.arc(balls[i].x, balls[i].y, w_radius, 0, 2 * Math.PI, true);
        cxt.closePath();

        cxt.fill();

    }
}

function renderDigit(x, y, num, cxt) {
    cxt.fillStyle = "rgb(0,102,153)";
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] === 1) {
                cxt.beginPath();
                cxt.arc(x + j * 2 * (w_radius + 1) + (w_radius + 1), y + i * 2 * (w_radius + 1) + (w_radius + 1), w_radius, 0, 2 * Math.PI);
                cxt.closePath();

                cxt.fill();
            }
        }
    }
}
