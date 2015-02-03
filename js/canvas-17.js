window.onload = function () {

    var canvas = document.getElementById("cvs");
    canvas.width = 1200;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    context.globalAlpha = 0.7;
    context.globalCompositeOperation = "lighter";
    for(var i = 0; i < 100; i++){

        var R = Math.floor(Math.random()*255);
        var G = Math.floor(Math.random()*255);
        var B = Math.floor(Math.random()*255);

        context.fillStyle = "rgb(" + R + "," + G + "," + B + ")";

        context.beginPath();
        context.arc(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*100, 0 , Math.PI*2);
        context.closePath();
        context.fill();
    }

};

