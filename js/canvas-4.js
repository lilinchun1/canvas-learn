/**
 * Created by Administrator on 2015/1/30.
 */

window.onload = function () {

    var canvas = document.getElementById("cvs");
    var context = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 800;

    //漫天繁星
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width,canvas.height);

    /*for(var i = 0; i < 200; i++){
        var r = Math.random() * 10 + 10;
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var a = Math.random() * 360;
        dwStar(context, r, r/2.0, x, y ,a);
    }*/
    for(var i = 0; i < 200; i++){
        var r = Math.random() * 10 + 10;
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var a = Math.random() * 360;
        dwStar(context, x, y, r, a);
    }

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