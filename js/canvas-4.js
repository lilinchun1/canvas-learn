/**
 * Created by Administrator on 2015/1/30.
 */

window.onload = function () {

    var canvas = document.getElementById("cvs");
    var context = canvas.getContext("2d");

    canvas.width = 1200;
    canvas.height = 800;

    //漫天繁星
    /*var skyBg = context.createLinearGradient(0, 0, 0, canvas.height);*/
    var skyBg = context.createRadialGradient(canvas.width/2,canvas.height,0, canvas.width/2,canvas.height,canvas.height);
    skyBg.addColorStop(0.0, "#035");
    skyBg.addColorStop(1.0, "#000");
    context.fillStyle = skyBg;
    context.fillRect(0,0,canvas.width,canvas.height);

    /*for(var i = 0; i < 200; i++){
        var r = Math.random() * 10 + 10;
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var a = Math.random() * 360;
        dwStar(context, r, r/2.0, x, y ,a);
    }*/
    for(var i = 0; i < 200; i++){
        var r = Math.random() * 5 + 5;
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height * 0.65;
        var a = Math.random() * 360;
        dwStar(context, x, y, r, a);
    }

    fillMoon(context, 2, 800, 200, 100, 0);

};

/*
function dwStar(cxt, r, R, x, y, rot) {
    cxt.beginPath();
    for(var i = 0; i < 5; i++ ){
        cxt.lineTo(Math.cos((18 + i * 72 - rot)/180 * Math.PI) * R + x, -Math.sin((18 + i * 72 - rot)/180 * Math.PI) * R + y);
        cxt.lineTo(Math.cos((54 + i * 72 - rot)/180 * Math.PI) * r + x, -Math.sin((54 + i * 72 - rot)/180 * Math.PI) * r + y);
    }
    cxt.closePath();

    cxt.fillStyle = "#fb3";
    cxt.strokeStyle = "#fd5";
    cxt.lineWidth = 3;
    cxt.lineJoin = "round";

    cxt.fill();
    cxt.stroke();

}*/


function dwStar(cxt, x, y, R, rot){

    cxt.save(); //保存绘图上下文

    cxt.translate(x, y);
    cxt.rotate(rot / 180 * Math.PI);
    cxt.scale(R, R);
    starPath(cxt);

    //绘制出（x， y）大小为R 旋转为rot度的五角星
    cxt.fillStyle = "#fb3";
    //cxt.strokeStyle = "#fd5";
    //cxt.lineWidth = 3;
    //cxt.lineJoin = "round";

    cxt.fill();
    //cxt.stroke();

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

//绘制月亮

function fillMoon(cxt, d, x, y, R, rot, /*optional*/fillColor) {

    cxt.save();
    cxt.translate(x, y);
    cxt.rotate(rot * Math.PI / 180);
    cxt.scale(R, R);
    pathMoon(cxt, d);
    cxt.fillStyle = fillColor || "#fb5";
    cxt.fill();
    cxt.restore();

}

function pathMoon(cxt, d) {

    cxt.beginPath();
    cxt.arc(0, 0, 1, 0.5 * Math.PI, 1.5 * Math.PI, true);
    cxt.moveTo(0, -1);
    cxt.arcTo(d, 0, 0, 1, dis(0, -1, d, 0) / d);
    cxt.closePath();

}
function dis(x1, y1, x2, y2) {

    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));

}