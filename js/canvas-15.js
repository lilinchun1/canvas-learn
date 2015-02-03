window.onload = function () {

    var canvas = document.getElementById("cvs");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    context.fillStyle = "#058";
    context.font = "bold 40px san-serif";

    context.textAlign = "left";
    context.fillText("textalign = left", 400, 100);

    context.strokeStyle = "#888";
    context.moveTo(400, 0);
    context.lineTo(400, 800);
    context.stroke();

    context.textBaseline = "bottom";
    context.fillText("textalign = left", 400, 200);
    a(context, 200);

    var textWidth = context.measureText("daljsdlfcjsfvcs").width;
    console.log(textWidth);
};

function a(cxt, h) {

    var width =  cxt.canvas.width;

    cxt.save();
    cxt.strokeStyle = "#888";
    cxt.lineWidth = 2;
    cxt.moveTo(0, h);
    cxt.lineTo(width, h);
    cxt.stroke();
    cxt.restore();

}