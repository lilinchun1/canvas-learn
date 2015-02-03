window.onload = function () {

    var canvas = document.getElementById("cvs");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    context.fillStyle = "#058";
    context.font = "bold 120px Arial";

    context.shadowColor = "gray";
    context.shadowOffsetX = 20;
    context.shadowOffsetY = 20;
    context.shadowBlur = 15;

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("CANVAS", canvas.width/2, canvas.height/2);

};

