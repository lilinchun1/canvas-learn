/**
 * Created by Administrator on 2015/2/1.
 */
window.onload = function () {

    var canvas = document.getElementById("cvs");
    canvas.width = 1000;
    canvas.height = 1000;
    var context = canvas.getContext("2d");

    fillMoon(context, 2, 400, 400, 300, 0);


};

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
    //cxt.arcTo(d, 0, 0, 1, dis(0, -1, d, 0) / d);
    cxt.quadraticCurveTo(1.4, 0 ,0, 1);
    cxt.closePath();

}
function dis(x1, y1, x2, y2) {

    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));

}