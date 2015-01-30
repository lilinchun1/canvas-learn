/**
 * Created by Administrator on 2015/1/29.
 */
window.onload = function () {

    /*var canvas = document.getElementById("cvs");
    var context = canvas.getContext("2d");

    canvas.width = 1024;
    canvas.height = 768;*/

    /*context.lineWidth = 10;

    context.beginPath();
    context.lineTo(100,200);
    context.lineTo(300,400);
    context.lineTo(100,600);
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.lineTo(300,200);
    context.lineTo(500,400);
    context.lineTo(300,600);
    context.strokeStyle = "green";
    context.stroke();

    context.beginPath();
    context.lineTo(500,200);
    context.lineTo(700,400);
    context.lineTo(500,600);
    context.strokeStyle = "blue";
    context.stroke();*/

    /*context.beginPath();
    context.lineTo(100,350);
    context.lineTo(500,350);
    context.lineTo(500,200);
    context.lineTo(700,400);
    context.lineTo(500,600);
    context.lineTo(500,450);
    context.lineTo(100,450);
    //context.lineTo(100,350);
    context.closePath();

    context.lineWidth = 10;
    context.strokeStyle = "#058";
    context.fillStyle = "yellow";

    context.fill();
    context.stroke();*/

    //绘制矩形1
    /*function dwRect(cxt, begin_x, begin_y, width, height, bdw, bdc, bgc) {

        cxt.beginPath();
        cxt.moveTo(begin_x, begin_y);
        cxt.lineTo(begin_x + width, begin_y);
        cxt.lineTo(begin_x + width, begin_y + height);
        cxt.lineTo(begin_x, begin_y + height);
        cxt.closePath();

        cxt.lineWidth = bdw;
        cxt.strokeStyle = bdc;
        cxt.fillStyle = bgc;

        cxt.fill();
        cxt.stroke();
    }

    dwRect(context, 100, 100, 500, 300, 10, "blue", "yellow" );
    dwRect(context, 500, 500, 200, 200, 10, "green", "blue" );*/

    //绘制矩形2
    /*function dwRect(cxt, begin_x, begin_y, width, height, bdw, bdc, bgc) {

        cxt.rect(begin_x, begin_y, width, height);

        cxt.lineWidth = bdw;
        cxt.strokeStyle = bdc;
        cxt.fillStyle = bgc;

        cxt.fill();
        cxt.stroke();
    }
    dwRect(context, 100, 100, 500, 300, 10, "blue", "yellow" );
    dwRect(context, 500, 500, 200, 200, 10, "green", "blue" );*/

    /*//绘制矩形3
    function dwRect2(cxt, begin_x, begin_y, width, height, bdw, bdc, bgc) {

        cxt.lineWidth = bdw;
        cxt.strokeStyle = bdc;
        cxt.fillStyle = bgc;

        cxt.fillRect(begin_x, begin_y, width, height);
        cxt.strokeRect(begin_x, begin_y, width, height);
    }
    dwRect2(context, 500, 500, 200, 200, 10, "green", "yellow" );*/


    var canvas = document.getElementById("cvs");
    var context = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 800;

    context.lineWidth = 10;
    context.strokeStyle = "#058";

    context.beginPath();
    context.moveTo(100,200);
    context.lineTo(700,200);
    context.lineCap = "butt";
    context.stroke();

    context.beginPath();
    context.moveTo(100,400);
    context.lineTo(700,400);
    context.lineCap = "round";
    context.stroke();

    context.beginPath();
    context.moveTo(100,600);
    context.lineTo(700,600);
    context.lineCap = "square";
    context.stroke();

    //baseline
    context.lineWidth = 1;
    context.strokeStyle = "#27a";
    context.moveTo(100,100);
    context.lineTo(100,700);
    context.moveTo(700,100);
    context.lineTo(700,700);
    context.stroke();
};
