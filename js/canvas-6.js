/**
 * Created by Administrator on 2015/1/30.
 */


window.onload = function () {

    var canvas = document.getElementById("cvs");
    var context = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 800;

    /*var linearGrad = context.createLinearGradient(-200, -200, 1000, 1000);*/
    var linearGrad = context.createRadialGradient(400,400,100, 400,400,500);
    linearGrad.addColorStop(0.0, "#fff");
    linearGrad.addColorStop(0.25, "yellow");
    linearGrad.addColorStop(0.5, "green");
    linearGrad.addColorStop(0.75, "blue");
    linearGrad.addColorStop(1.0, "#000");

    context.fillStyle = linearGrad;

    context.fillRect(0, 0, 800, 800);


};