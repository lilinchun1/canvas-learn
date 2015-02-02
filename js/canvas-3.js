/**
 * Created by Administrator on 2015/1/30.
 */

window.onload = function () {

    var canvas = document.getElementById("cvs");
    var context = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 800;

    //五角星绘制

   /* context.beginPath();
    for(var i = 0; i < 5; i++ ){
        context.lineTo(Math.cos((18 + i * 72)/180 * Math.PI) * 300 + 400, -Math.sin((18 + i * 72)/180 * Math.PI) * 300 + 400);
        context.lineTo(Math.cos((54 + i * 72)/180 * Math.PI) * 150 + 400, -Math.sin((54 + i * 72)/180 * Math.PI) * 150 + 400);
    }
    context.closePath();*/


    context.lineWidth = 10;
    context.strokeStyle = "#058";
    context.lineJoin = "miter";
    context.miterLimit = 25;

    dwStar(context,30,300, 400,400 ,30);



};

function dwStar(cxt, r, R, x, y, rot) {

    cxt.beginPath();

    for(var i = 0; i < 5; i++ ){
        cxt.lineTo(Math.cos((18 + i * 72 - rot)/180 * Math.PI) * R + x, -Math.sin((18 + i * 72 - rot)/180 * Math.PI) * R + y);
        cxt.lineTo(Math.cos((54 + i * 72 - rot)/180 * Math.PI) * r + x, -Math.sin((54 + i * 72 - rot)/180 * Math.PI) * r + y);
    }

    cxt.closePath();
    cxt.stroke();
}