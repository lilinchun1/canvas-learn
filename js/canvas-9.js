/**
 * Created by Administrator on 2015/2/1.
 */
window.onload = function () {

    var canvas = document.getElementById("cvs");
    canvas.width = 1000;
    canvas.height = 1000;
    var context = canvas.getContext("2d");

    /*context.beginPath();
    context.moveTo(150, 150);
    context.arcTo(650, 150, 650, 650, 300);

    context.lineWidth = 6;
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(650, 150);
    context.lineTo(650, 650);

    context.lineWidth = 2;
    context.strokeStyle = "gray";
    context.stroke();*/

    arcToTest(context, 150, 100, 650, 100, 650, 600, 300 );
    arcToTest(context, 150, 100, 650, 100, 650, 600, 100 );

};

function arcToTest(cxt, x0, y0, x1, y1, x2, y2, R) {

    cxt.beginPath();
    cxt.moveTo(x0, y0);
    cxt.arcTo(x1, y1, x2, y2, R);
    cxt.stroke();

    cxt.lineWidth = 6;
    cxt.strokeStyle = "red";
    cxt.stroke();

    cxt.beginPath();
    cxt.moveTo(x0, y0);
    cxt.lineTo(x1, y1);
    cxt.lineTo(x2, y2);

    cxt.lineWidth = 2;
    cxt.strokeStyle = "gray";
    cxt.stroke();
}