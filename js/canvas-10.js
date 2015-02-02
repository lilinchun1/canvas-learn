/**
 * Created by Administrator on 2015/2/1.
 */
window.onload = function () {

    var canvas = document.getElementById("cvs");
    canvas.width = 1000;
    canvas.height = 1000;
    var context = canvas.getContext("2d");

    context.arc(400, 400, 300, 0.5 * Math.PI, 1.5 * Math.PI, true);
    context.moveTo(400, 100);
    context.arcTo(1200, 400, 400, 700, (400-100) * dis(400, 100, 1200, 400) / (1200-400));
    context.stroke();

};

function dis(x1, y1, x2, y2) {

    return Math.sqrt((x1-x2) * (x1-x2) + (y1-y2) * (y1- y2));
}
