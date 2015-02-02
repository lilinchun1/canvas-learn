window.onload = function () {

    var canvas = document.getElementById("cvs");
    canvas.width = 1000;
    canvas.height = 1000;
    var context = canvas.getContext("2d");

    context.font = " bold 40px Arial";
    context.fillStyle = "#058";

    context.fillText("www.llcly.cn", 40, 100);

    context.strokeText("www.llcly.cn", 40, 200);

    context.strokeText("www.llcly.cn", 40, 400, 100);

    var linearGrad = context.createLinearGradient(0, 0, 1000, 0);
    linearGrad.addColorStop(0.0, "#fff");
    linearGrad.addColorStop(0.25, "yellow");
    linearGrad.addColorStop(0.5, "green");
    linearGrad.addColorStop(0.75, "blue");
    linearGrad.addColorStop(1.0, "#000");

    context.fillStyle = linearGrad;
    context.fillText("www.llcly.cn/work/llcly", 40, 600);

};