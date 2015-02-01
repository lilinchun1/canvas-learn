/**
 * Created by Administrator on 2015/2/1.
 */

window.onload = function () {

    var canvas = document.getElementById("cvs");
    var context = canvas.getContext("2d");

    canvas.width = 1000;
    canvas.height = 1000;

    /*var bgImg = new Image();
    bgImg.src = "1.png";
    bgImg.onload = function () {

        var pattern = context.createPattern(bgImg, "repeat-x");
        context.fillStyle = pattern;
        context.fillRect(0, 0, 1000, 1000);

    };*/

    var bgCvs = createBackgroundCanvas();
    var patten = context.createPattern(bgCvs, "repeat");
    context.fillStyle =  patten;
    context.fillRect(0, 0, 1000, 1000);

};

function createBackgroundCanvas() {

    var backCanvas = document.createElement("canvas");
    backCanvas.height = 100;
    backCanvas.width = 100;
    var bgcanvasContext = backCanvas.getContext("2d");

    dwStar(bgcanvasContext, 50,50,50,0);

    return backCanvas;
}

function dwStar(cxt, x, y, R, rot){

    cxt.save(); //保存绘图上下文

    cxt.translate(x, y);
    cxt.rotate(rot / 180 * Math.PI);
    cxt.scale(R, R);
    starPath(cxt);

    cxt.fillStyle = "#fb3";

    cxt.fill();

    cxt.restore(); //恢复绘图上下文
}

//标准五角星
function starPath(cxt) {

    cxt.beginPath();
    for(var i = 0; i < 5; i++){

        cxt.lineTo( Math.cos((18 + i * 72) / 180 * Math.PI), -Math.sin((18 + i * 72) / 180 * Math.PI));
        cxt.lineTo( Math.cos((54 + i * 72) / 180 * Math.PI) * 0.5, -Math.sin((54 + i * 72) / 180 * Math.PI) * 0.5);
    }
    cxt.closePath();

}