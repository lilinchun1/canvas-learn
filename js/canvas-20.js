/**
 * Created by Administrator on 2015/2/3.
 */
window.onload = function () {

    var canvas = document.getElementById("cvs");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.fillStyle = "#fff";
    context.arc(400, 400, 150, 0, Math.PI*2);
    context.fill();
    context.clip();

    context.font = "bold 150px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#058";
    context.fillText("CANVAS", canvas.width/2, canvas.height/2);
};