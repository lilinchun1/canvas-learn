/**
 * Created by Administrator on 2015/2/1.
 */

window.onload = function () {

    var canvas = document.getElementById("cvs");
        canvas.width = 1000;
        canvas.height = 1000;
    var context = canvas.getContext("2d");

    fillRoundRect(context, 150, 150, 500, 500, 10 , "#bbada0");
    for(var i = 0; i < 4; i++){

        for(var j = 0; j < 4; j++){

            fillRoundRect(context, 170 + i * 120, 170 + j *120, 100, 100, 6, "#ccc0b3");
        }

    }


};


/*
function dwRoundRect(cxt, x, y, width, height, radius) {

    cxt.save();
    cxt.translate(x, y);
    PathRoundRect(cxt, width, height, radius);
    cxt.strokeStyle = "black";
    cxt.stroke();
    cxt.restore();
}

function PathRoundRect(cxt, width, height, radius) {

    cxt.beginPath();
    cxt.arc(width-radius, height - radius, radius, 0, Math.PI/2);
    cxt.lineTo(radius,height);
    cxt.arc(radius, height - radius, radius, Math.PI/2, Math.PI);
    cxt.lineTo(0,radius);
    cxt.arc(radius, radius, radius, Math.PI, Math.PI*3/2);
    cxt.lineTo(width-radius, 0);
    cxt.arc(width-radius, radius, radius, Math.PI*3/2, Math.PI*2);
    cxt.closePath();

}*/


function fillRoundRect(cxt, x, y, width, height, radius, /*optional*/ fillColor) {

    if(2 * radius > width || 2 * radius > height){
        return;
    }
    cxt.save();
    cxt.translate(x, y);
    PathRoundRect(cxt, width, height, radius);
    cxt.fillStyle = fillColor || "black";
    cxt.fill();
    cxt.restore();
}

function strokeRoundRect(cxt, x, y, width, height, radius, /*optional*/lineWidth,/*optional*/strokeColor) {

    if(2 * radius > width || 2 * radius > height){
        return;
    }
    cxt.save();
    cxt.translate(x, y);
    PathRoundRect(cxt, width, height, radius);
    cxt.lineWidth = lineWidth || 1;
    cxt.strokeStyle = strokeColor || "black";
    cxt.stroke();
    cxt.restore();

}

function PathRoundRect(cxt, width, height, radius) {

    cxt.beginPath();
    cxt.arc(width-radius, height - radius, radius, 0, Math.PI/2);
    cxt.lineTo(radius,height);
    cxt.arc(radius, height - radius, radius, Math.PI/2, Math.PI);
    cxt.lineTo(0,radius);
    cxt.arc(radius, radius, radius, Math.PI, Math.PI*3/2);
    cxt.lineTo(width-radius, 0);
    cxt.arc(width-radius, radius, radius, Math.PI*3/2, Math.PI*2);
    cxt.closePath();

}